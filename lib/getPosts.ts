//hacer un endpoint donde se puedan subr imagenes para usar y no usar el cache y ademas el force cache 
//hacerun curd de mensajes que suban mensajes nadamas 


export type Post = {
    id: number;
    title: string;
    content: string;
    image: string;
    timestamp: string;
    random: number;
};

// ":D": "sonrisa.jpg"
const images = [
    "public/assets/images.jpeg",
    "public/assets/images2.jpeg",
    "public/assets/images3.jpeg",
];

export async function getPosts(options?: RequestInit): Promise<Post[]> {
    // Fetch que simula el cache de Next
    await fetch("https://google.com", options);

    return Array.from({ length: 5 }).map((_, i) => ({
        id: i + 1,
        title: `Post ${i + 1}`,
        content: "Contenido de ejemplo",
        image: images[Math.floor(Math.random() * images.length)],
        timestamp: new Date().toISOString(),
        random: Math.random(),
    }));

}