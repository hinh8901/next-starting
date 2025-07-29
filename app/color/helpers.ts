export type Color = {
  name: string,
  value: string
}

export const fetchColors = async () => {
  const response = await fetch(
    "https://webhook.site/3d103e28-c5ea-459a-bd63-dc5a9dd69268",
    {
      next: {
        tags: ["colors"]
      }
    }
  )
  const colors: Color[] = await response.json()
  return colors
}