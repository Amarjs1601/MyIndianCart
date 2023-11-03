import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Layout from '../components/layout/Layout';
import Categories from '../components/layout/category/Categories';
import Banner from '../components/layout/category/Banner';
import {BannerData} from '../data/BannerData';
import Products from '../components/products/Products';

const Home = () => {
  return (
    <Layout>
      <Categories />
      <Banner data={BannerData} />
      <Products />
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({});
