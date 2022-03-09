import React, { lazy } from 'react'
import { Route, Routes } from "react-router-dom"


const CreateStudent = lazy(() => import("../components/CreateStudent"));
const EditStudent = lazy(() => import("../components/EditStudent"));
const StudentList = lazy(() => import("../components/StudentList"));

console.log(CreateStudent)
export default function AppRoutes() {
    return (

        <Routes>
            <Route exact path="/" element={<CreateStudent />} />
            <Route path="/create" element={<CreateStudent />} />
            <Route path="/edit/:id" element={<EditStudent />} />
            <Route path="/list" element={<StudentList />} />
        </Routes>
    )
}
