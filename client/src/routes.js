import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/myFavorite",
    name: "favorites",
    component: () => import("./pages/FavoriteRecipesPage"),
  },
  {
    path: "/PersonalRecipes",
    name: "personalRecipes",
    component: () => import("./pages/PersonalRecipesPage"),
  },
  {
    path: "/FamilyRecipes",
    name: "familyRecipes",
    component: () => import("./pages/FamilyRecipesPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "/MealPlanning",
    name: "MealPlanning",
    component: () => import("./pages/MealPlanningPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
