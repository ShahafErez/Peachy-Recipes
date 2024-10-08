var express = require("express");
var router = express.Router();
const DButils = require("./utils/DButils");
const dbFunctionality_utils = require("./utils/DbFunctionality_utils");
const recipes_utils = require("./utils/recipes_utils");

/**
 * Authenticate all incoming requests by middleware
 */
router.use(async function (req, res, next) {
  if (req.session && req.session.user_id) {
    DButils.execQuery("SELECT user_id FROM users")
      .then((users) => {
        if (users.find((x) => x.user_id === req.session.user_id)) {
          req.user_id = req.session.user_id;
          next();
        }
      })
      .catch((err) => next(err));
  } else {
    res.sendStatus(401);
  }
});

/**
 * This path gets body with recipeId and save this recipe in the favorites list of the logged-in user
 */
router.post("/favorites", async (req, res, next) => {
  try {
    const user_id = req.session.user_id;
    const recipe_id = req.body.recipeId;
    const is_personal = req.query.personal;
    if (recipe_id) {
      let marked = await dbFunctionality_utils.markAsFavorite(
        user_id,
        recipe_id,
        is_personal
      );
      if (marked == true) {
        res.status(200).send("The Recipe successfully saved as favorite");
      } else {
        throw { status: 409, message: "recipe was already added as favorite" };
      }
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/favorites", async (req, res, next) => {
  try {
    const user_id = req.session.user_id;
    const recipe_id = req.body.recipeId;
    const is_personal = req.query.personal;
    if (recipe_id) {
      let unmarked = await dbFunctionality_utils.unmarkAsFavorite(
        user_id,
        recipe_id,
        is_personal
      );
      if (unmarked == true) {
        res.status(200).send("The Recipe successfully removed as favorite");
      } else {
        throw { status: 409, message: "recipe was not marked as favorite" };
      }
    }
  } catch (error) {
    next(error);
  }
});

/**
 * This path returns the favorites recipes that were saved by the logged-in user
 */
router.get("/favorites", async (req, res, next) => {
  try {
    const user_id = req.session.user_id;
    const favorite_recipes = await recipes_utils.getFavoriteRecipes(user_id);
    if (favorite_recipes.length > 0) {
      res.status(200).send(favorite_recipes);
    } else {
      res.status(204).send("you don't have favorite recipes");
    }
  } catch (error) {
    next(error);
  }
});

/**
 * Adding a new personal recipe by a user
 */
router.post("/add", async (req, res, next) => {
  const user_id = req.session.user_id;
  try {
    if (req.body.title) {
      let recipe_id = await recipes_utils.addNewRecipeByUser(user_id, req);
      if (recipe_id != undefined) {
        res
          .status(200)
          .send(` ${recipe_id} New Personal Recipe successfully added`);
      } else {
        throw new Error("there was an error while adding");
      }
    }
  } catch (error) {
    next(error);
  }
});

/**
 * Getting all the personal recipes by a user
 */
router.get("/personals", async (req, res, next) => {
  try {
    const user_id = req.session.user_id;
    console.log("user id is: " + user_id);
    const personal_recipes = await recipes_utils.getPersonalRecipes(user_id);
    if (personal_recipes.length > 0) {
      res.status(200).send(personal_recipes);
    } else {
      res.status(204).send("you don't have personal recipes");
    }
  } catch (error) {
    next(error);
  }
});

/**
 * Getting all the family recipes by a user
 */
router.get("/myFamilyRecipes", async (req, res, next) => {
  try {
    const user_id = req.session.user_id;
    const family_recipes = await recipes_utils.getFamilyRecipes(user_id);
    if (family_recipes.length > 0) {
      res.status(200).send(family_recipes);
    } else {
      res.status(204).send("you don't have family recipes");
    }
  } catch (error) {
    next(error);
  }
});

/**
 * Getting the 3 recipes that the user last viewed
 * For the Main Page
 */
router.get("/lastThreeViewed", async (req, res, next) => {
  const user_id = req.session.user_id;
  try {
    const last_viewed_recipes = await recipes_utils.getNewestViewed(user_id, 3);
    if (last_viewed_recipes.length > 0) {
      res.status(200).send(last_viewed_recipes);
    } else {
      res.status(204).send("you haven't watched any recipes yet");
    }
  } catch (error) {
    next(error);
  }
});

/*
  getting the full details of a personal recipe
*/
router.get("/personal/:recipeId", async (req, res, next) => {
  try {
    const recipe_id = req.params.recipeId;
    const user_id = req.session.user_id;
    let receips;
    if (
      recipe_id > (await dbFunctionality_utils.getHighestPersonalIndex()) ||
      recipe_id === undefined
    ) {
      receips = await recipes_utils.viewRecipe(user_id, recipe_id);
    } else {
      receips = await recipes_utils.getPersonalFull(user_id, recipe_id);
    }
    if (receips && receips != -1) {
      res.status(200).send(receips);
    } else {
      res.status(204).send({
        message: "no recipe was found with that id",
        success: false,
      });
    }
    // }
  } catch (error) {
    next(error);
  }
});
router.post("/upcomingMeal/:recipeId", async (req, res, next) => {
  const user_id = req.session.user_id;
  let is_personal = req.query.isPersonal;
  let recipe_id = req.params.recipeId;
  try {
    if (recipe_id) {
      await recipes_utils.addRecipeToUpcomingMeal(
        user_id,
        recipe_id,
        is_personal
      );
      res.status(200).send("Recipe successfully added to Upcoming meal");
    }
  } catch (error) {
    next(error);
  }
});

// get UpcomingMeal recipes
router.get("/upcomingMeal", async (req, res, next) => {
  try {
    const user_id = req.session.user_id;
    const meal_recipes = await recipes_utils.getUpcomingMealRecipes(user_id);
    res.status(200).send(meal_recipes);
  } catch (error) {
    next(error);
  }
});

// get number of upcoming meals
router.get("/NumRecipesUpcomingMeal", async (req, res, next) => {
  try {
    const user_id = req.session.user_id;
    const meal_recipes = await recipes_utils.getNumOfUpcomingMealRecipes(
      user_id
    );
    res.status(200).send(" " + meal_recipes); // TODO- need to recive at string at 3.3
  } catch (error) {
    next(error);
  }
});

//  put change recipe order in meal
router.put("/changeRecipeOrderInMeal", async (req, res, next) => {
  try {
    const user_id = req.session.user_id;
    const recipe_id = req.body.recipeId;
    const new_order = req.body.neworder;
    if (recipe_id && new_order) {
      await recipes_utils.changeRecipeOrder(user_id, recipe_id, new_order);
      res
        .status(200)
        .send(`the order of recipe ${recipe_id} was changed to ${new_order}`);
    }
  } catch (error) {
    next(error);
  }
});

// remove recipe from list
router.delete("/removeRecipeFromMeal", async (req, res, next) => {
  try {
    const user_id = req.session.user_id;
    const recipe_id = req.body.recipeId;
    if (recipe_id) {
      await recipes_utils.removeRecipeFromMeal(user_id, recipe_id);
      res.status(200).send(`recipe ${recipe_id} was deleted from meal`);
    }
  } catch (error) {
    next(error);
  }
});

//delete all list
router.delete("/removeAllRecipesFromMeal", async (req, res, next) => {
  try {
    const user_id = req.session.user_id;
    await recipes_utils.removeAllRecipeFromMeal(user_id);
    res.status(200).send(`all recipes were deleted from meal`);
  } catch (error) {
    next(error);
  }
});

/**
 * Error handling
 */
router.use(function (err, req, res, next) {
  res.status(500).send("server error");
});

module.exports = router;
