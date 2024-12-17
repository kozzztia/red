export const getItem = async (item: string) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${item}`, {
        cache: "force-cache", //ssg static
        next: { revalidate: 3600 }, //isr переобновляется на сервере
      });
  
      if (!response.ok) {
        return null;
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching item:", error);
      return null;
    }
  };

  export const getItems = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      cache: "force-cache", //Это поведение по умолчанию для запросов на стороне клиента (CSR).
      // cache: "no-cache", //ssr каждый раз будет пересоздаваться
      // cache: "reload", //то позволяет гарантированно получить самые свежие данные.
      // cache: "no-store", //чтобы получать самые актуальные данные.
    })
    return await response.json()
  }