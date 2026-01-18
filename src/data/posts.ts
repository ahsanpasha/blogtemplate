export interface Post {
    id: string;
    title: string;
    category: string;
    categoryLink: string;
    link: string;
    date: string;
    readTime: string;
    image: string;
    imageAlt?: string;
    isFeatured?: boolean;
}

export const posts: Post[] = [
    {
        id: "1",
        title: "Life and Stress at the Ice Edge",
        category: "Travel",
        categoryLink: "/category/travel",
        link: "/post/life-and-stress-at-the-ice-edge",
        date: "October 4, 2021",
        readTime: "4 min read",
        image: "https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/601e9824945d83f018fd3180_Main%20Post%20Image%203.png",
        isFeatured: true
    },
    {
        id: "2",
        title: "Top 4 Forest to Visit in Europe",
        category: "Travel",
        categoryLink: "/category/travel",
        link: "/post/top-4-forest-to-visit-in-europe",
        date: "September 27, 2021",
        readTime: "8 min read",
        image: "https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/601e985dbe60325095afc7c4_Main%20Post%20Image%206.png",
        isFeatured: true
    },
    {
        id: "3",
        title: "Delicious Chewy Granola Bars",
        category: "Food",
        categoryLink: "/category/food",
        link: "/post/delicious-chewy-granola-bars",
        date: "August 1, 2021",
        readTime: "6 min read",
        image: "https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/601e983296ebfb2db11be968_Main%20Post%20Image%204.png",
        isFeatured: true
    },
    {
        id: "4",
        title: "10 Quick Tips About Traveling",
        category: "Travel",
        categoryLink: "/category/travel",
        link: "/post/10-quick-tips-about-traveling",
        date: "June 22, 2021",
        readTime: "2 min read",
        image: "https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/601e989fbe6032f726afc8db_Main%20Post%20Image%2010.png",
        isFeatured: true
    },
    {
        id: "5",
        title: "The Tudor Micro Cottage on Wheels",
        category: "Off Grid",
        categoryLink: "/category/off-grid",
        link: "/post/the-tudor-micro-cottage-on-wheels",
        date: "February 20, 2021",
        readTime: "2 min read",
        image: "https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/60303035f3cb2f02757fd136_Main-Post-Image-17.jpg"
    },
    {
        id: "6",
        title: "This Tiny House Is Off Grid Perfection",
        category: "Off Grid",
        categoryLink: "/category/off-grid",
        link: "/post/this-tiny-house-is-off-grid-perfection",
        date: "February 25, 2021",
        readTime: "7 min read",
        image: "https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/60302d12c924de6cd28f2b41_Main%20Post%20Image%2011.png"
    },
    {
        id: "7",
        title: "The Best Off Grid Heating Systems",
        category: "Off Grid",
        categoryLink: "/category/off-grid",
        link: "/post/the-best-off-grid-heating-systems",
        date: "February 25, 2021",
        readTime: "6 min read",
        image: "https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/6030302271aa6a1af8d25e53_Main-Post-Image-12.jpg"
    },
    {
        id: "8",
        title: "The Lily Pad Shipping Container House",
        category: "Off Grid",
        categoryLink: "/category/off-grid",
        link: "/post/the-lily-pad-shipping-container-house",
        date: "February 28, 2021",
        readTime: "4 min read",
        image: "https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/6030304dd8759c4992088fb3_Main-Post-Image-14.jpg"
    },
    {
        id: "9",
        title: "How To Live Off The Grid",
        category: "Off Grid",
        categoryLink: "/category/off-grid",
        link: "/post/how-to-live-off-the-grid",
        date: "February 25, 2021",
        readTime: "3 min read",
        image: "https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/60302f7027c879700b44f0fc_Main-Post-Image-11.jpg"
    },
    {
        id: "10",
        title: "Living Off-Grid: What It’s Actually Like",
        category: "Off Grid",
        categoryLink: "/category/off-grid",
        link: "/post/why-we-love-webflow-and-you-should-too",
        date: "May 4, 2020",
        readTime: "2 min read",
        image: "https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/601e980d254fe8c02a1496c8_Main%20Post%20Image%202.png"
    },
    {
        id: "11",
        title: "Stretching Ground Beef",
        category: "Food",
        categoryLink: "/category/food",
        link: "/post/stretching-ground-beef",
        date: "June 4, 2021",
        readTime: "4 min read",
        image: "https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/601e983296ebfb2db11be968_Main%20Post%20Image%204.png"
    },
    {
        id: "12",
        title: "Women at the End of the Land",
        category: "Travel",
        categoryLink: "/category/travel",
        link: "/post/women-at-the-end-of-the-land",
        date: "October 22, 2020",
        readTime: "7 min read",
        image: "https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/601e98759239ef2558d88222_Main%20Post%20Image%208.png"
    },
    {
        id: "13",
        title: "Top 10 Places To Visit",
        category: "Travel",
        categoryLink: "/category/travel",
        link: "/post/10-things-nobody-told-you-about-being-a-web-designer",
        date: "April 28, 2021",
        readTime: "4 min read",
        image: "https://cdn.prod.website-files.com/601b0eabbce5fc78dc318621/601e987f96ebfb63e01beb21_Main%20Post%20Image%209.png"
    }
];
