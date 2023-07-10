//@ts-nocheck
import AdminPage from "./pages/AdminPage";
import Authorization from "./pages/Authorization";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import {AuthorisedPath, UnauthorisedPath} from "./utils/Path";
import MainPage from "./pages/MainPage";
import ManShoes from "./pages/ManShoes";
import WomanShoes from "./pages/WomanShoes";
import FavoritePage from "./pages/FavoritePage";
import PaymentsPage from "./pages/PaymentsPage";
import KidsPage from "./pages/KidsPage";
import CustomPage from "./pages/CustomPage";
import CustomShoesPage from "./pages/CustomShoesPage";


export const authRoutes = [
 {
     path: AuthorisedPath.ADMIN_ROUTE,
     Component: AdminPage
 },
 {
     path: AuthorisedPath.BASKET_ROUTE,
     Component: Basket
 },
    {
        path: AuthorisedPath.MAINPAGE_ROUTE,
        Component: MainPage
    },
    {
        path: AuthorisedPath.CUSTOMPAGE_ROUTE,
        Component: CustomPage
    },
    {
        path: AuthorisedPath.DONECUSTOM_ROUTE,
        Component: CustomShoesPage
    }
];

export const publicRoutes = [
    {
        path: UnauthorisedPath.SHOP_ROUTE,
        Component: Shop
    },
    {
        path: UnauthorisedPath.DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: UnauthorisedPath.LOGIN_ROUTE,
        Component: Authorization
    },
    {
        path: UnauthorisedPath.REGISTRATION_ROUTE,
        Component: Authorization
    },
    {
        path: UnauthorisedPath.MAINPAGE_ROUTE,
        Component: MainPage
    },
    {
        path: UnauthorisedPath.MANPAGE_ROUTE,
        Component: ManShoes
    },
    {
        path: UnauthorisedPath.WOMANPAGE_ROUTE,
        Component: WomanShoes
    },
    {
        path: UnauthorisedPath.FAVORITEPAGE_ROUTE,
        Component: FavoritePage
    },
    {
        path: UnauthorisedPath.PAYMENTPAGE_ROUTE,
        Component: PaymentsPage
    },
    {
        path: UnauthorisedPath.KIDSPAGE_ROUTE,
        Component: KidsPage
    }
]
