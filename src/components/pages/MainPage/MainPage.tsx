import React, {useEffect} from 'react';
import Layout from "../../common/Layout/Layout";
import "./MainPage.scss";
import {useAppDispatch} from "../../../store/Redux-toolkit-hook";
import {addCategory, addVendor, addVendorLocation} from "../../../store/filtersStore";
import {getCategoryAll, getVendorLocationAll, getVendorAll , restSubCategory, getSubCategoryId,postSubCategory, getSubCategoryAll} from "../../../http/filtersApi"
import {postDiscount, getDiscounts} from "../../../http/discountApi"
const MainPage = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        getCategoryAll().then(resolve=>dispatch(addCategory(resolve.data))).catch(f=> console.log(f))
        getVendorAll().then(resolve =>dispatch(addVendor(resolve)) ).catch(f=> console.log(f))
        getSubCategoryAll().then(resolve=> {});
        getVendorLocationAll().then(resolve=> dispatch(addVendorLocation(resolve.data))).catch(f=> console.log(f))
    },[]);
    // if(true){
    //    getSubCategoryId("b3f0ddbb-9c78-4bb8-9ad9-57102e56cddb")
    //    postSubCategory({name:"test5", categoryId:"b3f0ddbb-9c78-4bb8-9ad9-57102e56cddb",}).then(resolve=> console.log(resolve));
    //    getDiscounts({ page: 0, size: 1, vendorIds:["1f764100-1919-4130-ac7e-c12e4317c1ee","3899fba6-0374-4c41-bee9-82b1d6c30417"]}).then(resolve=> console.log(resolve));
    //      const obj ={
    //          name:"Test&",
    //          vendorId:"9633eb72-199c-4cf2-b502-b17b913d9654",
    //          fullDescription:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    //          isOnline: false,
    //          imageLink:"dsfsdghjghjhfjg",
    //          startDate: "2017-07-19T14:25+02:00",
    //          endDate: "2017-07-19T14:25+02:00",
    //          subCategories:["87e2a19b-6a2e-407d-8f21-4089332c361f","58b7968d-3c49-4265-9e6f-c14d533d35d9"],
    //          locations:["0e2c2cbc-34d2-4c43-8c1a-0aefa78a96bb"],
    //          categoryId:"77d5153f-2b28-4881-ad7b-99c7b0b86595",
    //          percent:20
    //      }
    //      postDiscount(obj).then(resolve=> console.log(resolve));
    //     getDiscounts({ page:0, size:1,}).then(resolve=> console.log(resolve));
    // }
 return (
        <div className={"homepage"}>
            <Layout />
        </div>
    );
};

export default MainPage;