import React from 'react'
import {useState,useEffect} from 'react'
import { useForm } from "react-hook-form";

export default function Registration(){
const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
  trigger,
} = useForm();

const onSubmit = (data) => {
  console.log(data);
  reset();
};


return (
  <div className="container pt-5">
    <div className="row justify-content-sm-center pt-5">
      <div className="col-sm-6 shadow round pb-3">
        <h1 className="text-center pt-3 text-primary">Register here </h1>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="form-group">
            <label className="col-form-label">First Name:</label>
            <input type="text" className={`form-control ${errors.firstName && "invalid"}`}
              {...register("firstName", { required: "FirstName is Required" })}
              onKeyUp={() => {trigger("firstName"); }}/>
            {errors.firstName && (<small className="text-danger">{errors.firstName.message}</small>)}
          </div>

          <div className="form-group">
            <label className="col-form-label">Last Name:</label>
            <input type="text" className={`form-control ${errors.lastName && "invalid"}`}
              {...register("lastName", { required: "LastName is Required" })}
              onKeyUp={() => {trigger("lastName"); }}/>
            {errors.lastName && (<small className="text-danger">{errors.lastName.message}</small>)}
          </div>

          <div className="form-group">
            <label className="col-form-label">Date Of Birth:</label>
            <input type="date" className={`form-control ${errors.dateOfBirth && "invalid"}`}
              {...register("dateOfBirth", {required: "dateOfBirth is Required" })}
              onKeyUp={() => {trigger("dateOfBirth");}}/>
            {errors.dateOfBirth && (<small className="text-danger">{errors.dateOfBirth.message}</small>)}
          </div>
         
          {/* <div className="form-group">
         <label className="col-form-label">Gender:</label><br/>
         <input type="radio" value="Male" className={`form-control ${errors.gender && "invalid"}`}
         {...register("gender", {required: "Gender is required"})}
         onBlur={e=>{if(e.target.value==='')
                          {errors.gender && (<small className="text-danger">{errors.gender.message}</small>)}}}
          onChange={e=>{setForm({...form,gender:e.target.value})}}/>
         <label htmlFor="male">Male</label>

          <input type="radio" value="Female" id="female" 
        {...register("gender", {required: "Gender is required"})}
         onBlur={e=>{if(e.target.value==='')
                          {errors.gender && (<small className="text-danger">{errors.gender.message}</small>)}}}
          onChange={e=>{setForm({...form,gender:e.target.value})}}
                {...register("gender", {required: "Gender is required"})}/>
               
          <label htmlFor="female">Female</label>
                 </div> */}

          <div className="form-group">
            <label className="col-form-label">Contact Number:</label>
            <input type="tel" className={`form-control ${errors.contactNumber && "invalid"}`}
              {...register("contactNumber", { required: "contactNumber is Required",
               pattern: {value: /[0-9]{10}/,message: "Invalid phone no" }})}
              onKeyUp={() => {trigger("contactNumber"); }}/>
            {errors.contactNumber && (<small className="text-danger">{errors.contactNumber.message}</small>)}
          </div>

          <div className="form-group">
            <label className="col-form-label">Email ID:</label>
            <input type="email" className={`form-control ${errors.emailID && "invalid"}`}
              {...register("emailID", { required: "Email is Required" ,
              pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" }})}
              onKeyUp={() => {trigger("emailID");}}/>
            {errors.emailID && (<small className="text-danger">{errors.emailID.message}</small>)}
          </div>
             
          <div className="form-group">
            <label className="col-form-label">User ID:</label>
            <input type="number" className={`form-control ${errors.userID && "invalid"}`}
              {...register("userID", { required: "UserID is Required"})}
             onKeyUp={() => {trigger("userID"); }}/>
             {errors.userID && (<small className="text-danger">{errors.userID.message}</small>)}
          </div>

          <div className="form-group">
            <label className="col-form-label">Password:</label>
            <input type="password" className={`form-control ${errors.password && "invalid"}`}
              {...register("password", { required: "Password is Required" ,
              pattern: {value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, message: "Requirement is not satisfied" }})}
             onKeyUp={() => {trigger("password"); }}/>
             {errors.password && (<small className="text-danger">{errors.password.message}</small>)}
          </div>

          <input type="submit" className="btn btn-primary my-3" value="submit"/>
        </form>
      </div>
    </div>
  </div>
);
            }