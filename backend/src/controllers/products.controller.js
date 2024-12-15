import Product from "../models/Product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    // Fetch all products and populate the category field
    const products = await Product.find().populate("category");

    // Respond with the fetched products
    return res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    // Handle errors
    console.error("Error fetching products:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error: Unable to fetch products",
    });
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id).populate("category"); // Inclut les détails de la catégorie

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({
      success: false,
      message: "Server Error: Unable to fetch product.",
    });
  }
};

export const addProduct = async (req, res) => {
  try {
    const { title, content, image, price, category } = req.body;

    // Create a new product
    const newProduct = new Product({
      title,
      content,
      image,
      price,
      category,
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    return res.status(201).json({
      success: true,
      message: "Product created successfully.",
      data: savedProduct,
    });
  } catch (error) {
    console.error("Error adding product:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error: Unable to create product.",
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, image, price, category } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { title, content, image, price, category },
      { new: true, runValidators: true } // Renvoie le document mis à jour et applique les validations
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully.",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({
      success: false,
      message: "Server Error: Unable to update product.",
    });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product removed successfully.",
    });
  } catch (error) {
    console.error("Error removing product:", error);
    res.status(500).json({
      success: false,
      message: "Server Error: Unable to remove product.",
    });
  }
};
