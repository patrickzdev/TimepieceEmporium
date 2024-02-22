"use client"

import Image from "next/image";
import styles from "./page.module.css";
import NestedList from "../components/product/filter"
import {Grid, Paper} from "@mui/material";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Home() {
  return (
    <main>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <NestedList/>
        </Grid>
        <Grid item xs={8}>
          <p>Main Content</p>
        </Grid>
      </Grid>
    </main>
  );
}
