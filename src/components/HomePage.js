import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Grid,Pagination, Card, CardContent, CardActions } from '@mui/material';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setFilteredData(json);
      });
  }, []);

  const handleSearch = () => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
      <Grid container spacing={2}>
        {filteredData
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((item) => (
            <Grid item xs={4} key={item.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2">Description: {item.body}</Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" size="small" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
      <Pagination
        count={Math.ceil(filteredData.length / itemsPerPage)}
        page={page}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default HomePage;