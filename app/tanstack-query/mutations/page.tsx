'use client';

import { KeyboardEvent, useState } from 'react';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { LoaderPinwheel } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Todo = { id: string; todo: string };

const Mutations = () => {
  const [todo, setTodo] = useState('');

  const queryClient = useQueryClient();

  const { data: todos, isLoading } = useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await fetch('/api/todos');
      return res.json();
    },
    refetchOnWindowFocus: false,
  });

  const {
    mutate: addTodo,
    isPending: isAddingTodo,
    variables: todoVariables,
  } = useMutation({
    mutationKey: ['addTodo'],
    mutationFn: async (todo: string) => {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: uuidv4(), todo }),
      });

      if (res.ok) return res.json();
      else return Promise.reject(res);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });

  const { mutate: clearTodos, isPending: isClearingTodos } = useMutation({
    mutationKey: ['clearTodos'],
    mutationFn: async () => {
      const res = await fetch('/api/todos', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) return res.json();
      else return Promise.reject(res);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });

  const handleAddTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!todo.trim() || e.key.toLocaleLowerCase() !== 'enter') return;
    setTodo('');
    addTodo(todo.trim());
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <h3 className="font-semibold text-2xl">Todos</h3>
      {isLoading ? (
        <LoaderPinwheel className="animate-spin" />
      ) : (
        <div className="flex flex-col items-center gap-3">
          <input
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
            type="text"
            className="border px-2"
            onKeyDown={handleAddTodo}
            autoFocus
          />
          <ul>
            {todoVariables && isAddingTodo && (
              <li className={cn('opacity-30 text-green-800')}>
                {todoVariables}
              </li>
            )}
            {todos?.map((todo) => (
              <li
                key={todo.id}
                className={cn({ 'opacity-30 text-red-700': isClearingTodos })}
              >
                {todo.todo}
              </li>
            ))}
          </ul>
          <Button onClick={() => clearTodos()}>
            {isClearingTodos ? (
              <LoaderPinwheel className="animate-spin" />
            ) : (
              <>Clear all</>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Mutations;
