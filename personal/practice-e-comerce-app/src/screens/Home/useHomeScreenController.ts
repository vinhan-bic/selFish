import {CarouselProps} from "@/src/screens/Home/components/HomeCarousel";
import {CategoryProps} from "@/src/screens/Home/components/HomeCategories";
import {ProductProps} from "@/src/screens/Home/components/HomeRecommendation";


export const useHomeScreenController = () => {
    const carousels: CarouselProps[] = [
        {
            id: 0,
            name: '0',
            image: require('@/assets/images/img_carousel_1.jpeg'),
        },
        {
            id: 1,
            name: '1',
            image: require('@/assets/images/img_carousel_2.jpeg'),
        },
        {
            id: 2,
            name: '2',
            image: require('@/assets/images/img_carousel_3.jpeg'),
        },
    ]

    const categories: CategoryProps[] = [
        {
            id: 0,
            name: 'Nike',
            image: "https://picsum.photos/200"
        },
        {
            id: 1,
            name: 'Adias',
            image: "https://picsum.photos/200",
        },
        {
            id: 2,
            name: 'Adias',
            image: "https://picsum.photos/200",
        },
        {
            id: 3,
            name: 'Adias',
            image: "https://picsum.photos/200",
        },
        {
            id: 4,
            name: 'Adias',
            image: "https://picsum.photos/200",
        },
        {
            id: 5,
            name: 'Adias',
            image: "https://picsum.photos/200",
        }
    ]

    const recommendations: ProductProps[] = [
        {
            id: 0,
            name: 'Nike Lebron 8',
            image: "https://picsum.photos/200",
            price: "129.00",
            rating: 4.8,
            isFavorite: true,
        },
        {
            id: 1,
            name: 'Nike Dunk High',
            image: "https://picsum.photos/200",
            price: "127.00",
            rating: 4.7,
            isFavorite: true,
        },
        {
            id: 2,
            name: 'Nike Lebron 8',
            image: "https://picsum.photos/200",
            price: "129.00",
            rating: 4.8,
            isFavorite: true,
        },
        {
            id: 3,
            name: 'Nike Dunk High',
            image: "https://picsum.photos/200",
            price: "127.00",
            rating: 4.7,
            isFavorite: true,
        },
        {
            id: 4,
            name: 'Nike Lebron 8',
            image: "https://picsum.photos/200",
            price: "129.00",
            rating: 4.8,
            isFavorite: true,
        },
        {
            id: 5,
            name: 'Nike Dunk High',
            image: "https://picsum.photos/200",
            price: "127.00",
            rating: 4.7,
            isFavorite: true,
        }
    ]

    const onPressNotification = () => {
        //TODO: Navigate notification
    }

    const onPressSeeAllCategories = () => {
        //TODO: Navigate categories
    }

    const onPressProduct = (id: number) => {
        //TODO: Navigate to product
    }

    const onPressBanner = (id: number) => {
        //TODO: Navigate to banner
    }

    const onPressAddFavorite = (id: number) => {
        //TODO: Add product to favorite
    }

    return {
        name: 'Christian',
        carousels,
        categories,
        recommendations,
        onPressNotification,
        onPressSeeAllCategories,
        onPressProduct,
        onPressBanner,
        onPressAddFavorite
    }
}