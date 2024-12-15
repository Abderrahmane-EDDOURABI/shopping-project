import Category from '../models/Category.model.js';


export const getAllCategories = async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json({
        success: true,
        data: categories,
      });
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({
        success: false,
        message: 'Server Error: Unable to fetch categories.',
      });
    }
  };
  
  export const getOneCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findById(id);
  
      if (!category) {
        return res.status(404).json({
          success: false,
          message: 'Category not found.',
        });
      }
  
      res.status(200).json({
        success: true,
        data: category,
      });
    } catch (error) {
      console.error('Error fetching category:', error);
      res.status(500).json({
        success: false,
        message: 'Server Error: Unable to fetch category.',
      });
    }
  };

  export const addCategory = async (req, res) => {
    try {
      const { name, description } = req.body;
  
      const newCategory = new Category({ name, description });
      const savedCategory = await newCategory.save();
  
      res.status(201).json({
        success: true,
        message: 'Category added successfully.',
        data: savedCategory,
      });
    } catch (error) {
      console.error('Error adding category:', error);
      res.status(500).json({
        success: false,
        message: 'Server Error: Unable to add category.',
      });
    }
  };

  // 4. Update a category by ID (Admin only)
export const updateCategory = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
  
      const updatedCategory = await Category.findByIdAndUpdate(
        id,
        { name, description },
        { new: true, runValidators: true }
      );
  
      if (!updatedCategory) {
        return res.status(404).json({
          success: false,
          message: 'Category not found.',
        });
      }
  
      res.status(200).json({
        success: true,
        message: 'Category updated successfully.',
        data: updatedCategory,
      });
    } catch (error) {
      console.error('Error updating category:', error);
      res.status(500).json({
        success: false,
        message: 'Server Error: Unable to update category.',
      });
    }
  };
 
  export const removeCategory = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedCategory = await Category.findByIdAndDelete(id);
  
      if (!deletedCategory) {
        return res.status(404).json({
          success: false,
          message: 'Category not found.',
        });
      }
  
      res.status(200).json({
        success: true,
        message: 'Category removed successfully.',
      });
    } catch (error) {
      console.error('Error removing category:', error);
      res.status(500).json({
        success: false,
        message: 'Server Error: Unable to remove category.',
      });
    }
  };