
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Card, CardContent, CardMedia, Container, Grid, Button, CardActions, TextField, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from '../../Contexts/AuthContext';
import Navbar2 from './Navbar2';


const Home = () => {
  const [categories, setCategories] = useState([]);
  const [openAddProductDialog, setOpenAddProductDialog] = useState(false);
  const [openAddCategoryDialog, setOpenAddCategoryDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newProduct, setNewProduct] = useState({ });
  const [newCategoryName, setNewCategoryName] = useState('');
  const [edit,setEdit]  = useState(false)
  
  const {setUser, axiosInstance } = useAuth()

  useEffect(() => {
    axiosInstance.get(`/categories`)
      .then(response => setCategories(response.data))
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  const handleRemoveItem = (categoryId, itemId) => {
    axiosInstance.delete(`/categories/${categoryId}/items/${itemId}`)
      .then(() => {
        axiosInstance.get(`/categories`)
        .then(response => setCategories(response.data))
        .catch(error => console.error("Error fetching categories:", error));      })
      .catch(error => console.error("Error removing item:", error));
  };
  const handleedititem = ( itemId) => {
    axiosInstance.put(`/categories/${selectedCategory}/items/${itemId}`,{ ...newProduct})
      .then(() => {
        setEdit(false)
        setNewProduct({})
        setOpenAddProductDialog(false)
        axiosInstance.get(`/categories`)
        .then(response => setCategories(response.data))
        .catch(error => console.error("Error fetching categories:", error));      })
      .catch(error => console.error("Error removing item:", error));
  };

  const handleRemoveCategory = (categoryId) => {
    axiosInstance.delete(`/categories/${categoryId}`)
      .then(() => {
        setCategories(prev => prev.filter(category => category._id !== categoryId));
      })
      .catch(error => console.error("Error removing category:", error));
  };

  const handleAddProduct = () => {
    if (!selectedCategory) return;
    axiosInstance.post(`/categories/${selectedCategory}/items`, {
      ...newProduct
    })
      .then(response => {
        const updatedCategory = response.data;
        setCategories(prev => prev.map(category => category._id === selectedCategory ? updatedCategory : category));
        setOpenAddProductDialog(false);
        setSelectedCategory('');
        setNewProduct({ });
      })
      .catch(error => console.error("Error adding product:", error));
  };

  const handleAddCategory = () => {
    if (!newCategoryName.trim()) return;
    axiosInstance.post(`/categories`, { name: newCategoryName, items: [] })
      .then(response => {
        setCategories(prev => [...prev, response.data]);
        setOpenAddCategoryDialog(false);
        setNewCategoryName('');
      })
      .catch(error => console.error("Error adding category:", error));
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      {categories.map(category => (
        <Box key={category._id} sx={{ marginBottom: 4, position: 'relative' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <Typography variant="h5">{category.name}</Typography>
            <IconButton 
              sx={{ marginLeft: 'auto' }} 
              onClick={() => handleRemoveCategory(category._id)}
              size="small"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 1, padding: 2 }}>
            <Grid container spacing={2}>
              {category.items && category.items.map(item => (
                <Grid item xs={12} sm={6} md={3} key={item.id}>
                  <Card>
                    <CardMedia component="img" height="200" image={item.imageUrl1} alt={`Product ${item.id}`} />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">{item.price}</Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'flex-end' }}>
                      <Button size="small" color="error" onClick={() => handleRemoveItem(category._id, item._id)}>Remove</Button>
                      <Button size="small" color="error" onClick={() => {setOpenAddProductDialog(true);setNewProduct(item);setEdit(true);setSelectedCategory(category._id)}}>edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
              {(!category.items || category.items.length === 0) && (
                <Grid item xs={12}>
                  <Typography variant="body1" color="text.secondary" sx={{ paddingTop: 4, paddingBottom: 4, textAlign: 'center' }}>
                    No products available in this category
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
        </Box>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 4 }}>
        <Button variant="contained" color="primary" onClick={() => setOpenAddProductDialog(true)}>Add Product</Button>
        <Button variant="contained" color="secondary" onClick={() => setOpenAddCategoryDialog(true)}>Add Category</Button>
      </Box>
      <Dialog open={openAddProductDialog} onClose={() => setOpenAddProductDialog(false)}>
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 300 }}>
          <FormControl fullWidth>
            <InputLabel id="select-category-label">Category</InputLabel>
            <Select labelId="select-category-label" value={selectedCategory} label="Category" onChange={e => setSelectedCategory(e.target.value)}>
              {categories.map(category => (
                <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField label="Product Name" value={newProduct.title} onChange={e => setNewProduct({ ...newProduct, title: e.target.value })} fullWidth />
          <TextField label="Description" value={newProduct.description} onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} fullWidth />
          <TextField label="Photo URL" value={newProduct.imageUrl1} onChange={e => setNewProduct({ ...newProduct, imageUrl1: e.target.value })} fullWidth />
          <TextField label="Photo URL" value={newProduct.imageUrl2} onChange={e => setNewProduct({ ...newProduct, imageUrl2: e.target.value })} fullWidth />
          <TextField label="Photo URL" value={newProduct.imageUrl3} onChange={e => setNewProduct({ ...newProduct, imageUrl3: e.target.value })} fullWidth />
          <TextField label="Price" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} fullWidth />
          <TextField label="strikeprice" value={newProduct.strikeprice} onChange={e => setNewProduct({ ...newProduct, strikeprice: e.target.value })} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddProductDialog(false)} color="secondary">Cancel</Button>
          <Button onClick={()=>edit ? handleedititem(newProduct._id) : handleAddProduct()} variant="contained" color="primary">Add</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openAddCategoryDialog} onClose={() => setOpenAddCategoryDialog(false)}>
        <DialogTitle>Add Category</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 300 }}>
          <TextField label="Category Name" value={newCategoryName} onChange={e => setNewCategoryName(e.target.value)} fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddCategoryDialog(false)} color="secondary">Cancel</Button>
          <Button onClick={handleAddCategory} variant="contained" color="primary">Add</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Home;