
// import React, { useState } from 'react';
// import {
//     Box, Typography, Card, CardContent, CardMedia, Container, Grid, Button,
//     CardActions
// } from '@mui/material';

// const initialCategories = [
//     {
//         name: 'T-shirts',
//         items: [
//             { id: 1, photo: 'https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fHww', price: '$29.99' },
//             { id: 2, photo: 'https://png.pngtree.com/thumb_back/fh260/background/20230720/pngtree-d-render-of-a-black-t-shirt-against-a-concrete-wall-image_3716629.jpg', price: '$24.99' },
//             { id: 3, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5h8nnHcEgIlmE26-0cnjvM6vrJSDpgGab39w8rKKrUBGoRSdwtrnV7q12Lu8OUp6avo&usqp=CAU', price: '$19.99' },
//             { id: 4, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZx1L6cU9jTwjtCWyJ5u7yFM2Ldy91aFi04Q&s', price: '$22.99' },
//         ]
//     },
//     {
//         name: 'Pants',
//         items: [
//           { id: 1, photo: 'https://media.istockphoto.com/id/1314274760/photo/sport-pants.jpg?s=612x612&w=0&k=20&c=2siBA_21V8CbWXUfQ7ttUqW7ZOzs_d2yjSK8jEtvLw4=', price: '$29.99' },
//           { id: 2, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6d9lATVpVxHugpRNKB1pCxoCoFCDm1BYfA&s', price: '$24.99' },
//           { id: 3, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIR93C3AG8S3hac7NV5ENP4ssWHpTODQEf7w&s', price: '$19.99' },
//           { id: 4, photo: 'https://atlas-content-cdn.pixelsquid.com/stock-images/men-s-trousers-white-pants-Xl4zYDB-600.jpg', price: '$22.99' },
//       ]
//     },
//     {
//         name: 'Loafers',
//         items: [
//           { id: 1, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6QzIcJI8DTM5NnHja2C5mdKnK5apVSjEIhw&s', price: '$29.99' },
//           { id: 2, photo: 'https://www.theroyalepeacock.com/cdn/shop/products/loafers-tassel-loafers-brown-1_900x_2d8660d0-8823-4dc4-bec0-fc1b26c7c802.jpg?v=1722589706&width=1445', price: '$24.99' },
//           { id: 3, photo: 'https://admin.mochishoes.com/product/19-4290/660/19-4290M11.jpg', price: '$19.99' },
//           { id: 4, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxXKFNyOtZbuHyyn0PCjGi1iN_wQajfjGjA&s', price: '$22.99' },
//       ]
//     },
//     {
//         name: 'Shoes',
//         items: [
//           { id: 1, photo: 'https://thumbs.dreamstime.com/b/men-s-sports-shoes-gray-sneakers-shot-large-white-background-sport-shoes-comfort-men-s-sports-shoes-gray-sneakers-shot-large-172652435.jpg', price: '$29.99' },
//           { id: 2, photo: 'https://media.istockphoto.com/id/1201660255/photo/genuine-leather-sneakers-shoes-for-mens-fashions.jpg?s=612x612&w=0&k=20&c=OGxmUYPA6oFdi04IppLadAhY2tRdLlQ5uWMsx8a9W6c=', price: '$24.99' },
//           { id: 3, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpmJv66Lt_wpWWO7sqP0FNcV8zRgHaLuJCqA&s', price: '$19.99' },
//           { id: 4, photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr47qfOZYSMDXlsj7OlI7bfbjAsDkGCGdRtg&s', price: '$22.99' },
//       ]
//     }
// ];

// const Home = () => {
//     const [categories, setCategories] = useState(initialCategories);

//     const handleRemoveItem = (categoryName, itemId) => {
        
//     };

    

//     return (
//         <Container maxWidth="lg" sx={{ paddingTop: 4, paddingBottom: 4 }}>
//             {categories.map((category) => (
//                 <Box key={category.name} sx={{ marginBottom: 4 }}>
//                     <Typography variant="h5" sx={{ marginBottom: 2 }}>
//                         {category.name}
//                     </Typography>
//                     <Box sx={{
//                         border: '1px solid #e0e0e0',
//                         borderRadius: 1,
//                         padding: 2,
//                         marginBottom: 2
//                     }}>
//                         <Grid container spacing={2}>
//                             {category.items.map((item) => (
//                                 <Grid item xs={12} sm={6} md={3} key={item.id}>
//                                     <Card>
//                                         <CardMedia
//                                             component="img"
//                                             height="200"
//                                             image={item.photo}
//                                             alt={`Product ${item.id}`}
//                                         />
//                                         <CardContent>
//                                             <Typography variant="body2" color="text.secondary">
//                                                 {item.price}
//                                             </Typography>
//                                         </CardContent>
//                                         <CardActions sx={{ justifyContent: 'flex-end' }}>
//                                             <Button 
//                                                 size="small" 
//                                                 color="error"
//                                                 onClick={() => handleRemoveItem(category.name, item.id)}
//                                             >
//                                                 Remove
//                                             </Button>
//                                         </CardActions>
//                                     </Card>
//                                 </Grid>
//                             ))}
//                             {category.items.length === 0 && (
//                                 <Grid item xs={12}>
//                                     <Typography variant="body1" color="text.secondary" sx={{ paddingTop: 4, paddingBottom: 4, textAlign: 'center' }}>
//                                         No products available in this category
//                                     </Typography>
//                                 </Grid>
//                             )}
//                         </Grid>
//                     </Box>
//                 </Box>
//             ))}

//             <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     sx={{ paddingLeft: 4, paddingRight: 4 }}
//                 >
//                     Add Product
//                 </Button>
//             </Box>
//         </Container>
//     );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Card, CardContent, CardMedia, Container, Grid, Button, CardActions, TextField, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel, Select, MenuItem, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from '../../Contexts/AuthContext';

const API_URL = "http://localhost:3000";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [openAddProductDialog, setOpenAddProductDialog] = useState(false);
  const [openAddCategoryDialog, setOpenAddCategoryDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newProduct, setNewProduct] = useState({ });
  const [newCategoryName, setNewCategoryName] = useState('');

  const {setUser, axiosInstance } = useAuth()

  useEffect(() => {
    axiosInstance.get(`/categories`)
      .then(response => setCategories(response.data))
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  const handleRemoveItem = (categoryId, itemId) => {
    axiosInstance.delete(`/categories/${categoryId}/items/${itemId}`)
      .then(() => {
        setCategories(prev => prev.map(category => category._id === categoryId ? { ...category, items: category.items.filter(item => item.id !== itemId) } : category));
      })
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
                      <Button size="small" color="error" onClick={() => handleRemoveItem(category._id, item.id)}>Remove</Button>
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
          <Button onClick={handleAddProduct} variant="contained" color="primary">Add</Button>
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