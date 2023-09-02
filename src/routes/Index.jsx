import React, { useEffect,useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import AppNavbar from '../layout/AppNavbar'
import ViewAllMyBlogs from '../pages/ViewAllMyBlogs'
import SingleBlogView from '../pages/SingleBlogView'
import Login from '../pages/Login'
import { useFirebase } from '../context/Firebase'

const Index = () => {
  const {user}= useFirebase()
  return (
    <BrowserRouter>
    {user && <AppNavbar/>}
        <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Homepage />
            ) : (
              <Login />
            )
          }
        />
            <Route path='/singleView' element={<SingleBlogView/>}/>
            <Route path='viewallblogs' element={<ViewAllMyBlogs/>}/>
            <Route path='login' element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Index