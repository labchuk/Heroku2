import React, {useEffect} from 'react';
import Layout from "../../common/Layout/Layout";
import "./MainPage.scss";
import {useAppDispatch} from "../../../store/Redux-toolkit-hook";
import {addCategory, addVendor, addVendorLocation} from "../../../store/filtersStore";
import {getCategoryAll, getVendorLocationAll, getVendorAll ,getSubCategoryAll,  } from "../../../http/filtersApi"
import {postDiscount, getDiscounts} from "../../../http/discountApi"
const MainPage = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        getCategoryAll().then(resolve=> dispatch(addCategory(resolve.data))}).catch(f=> console.log(f))
        getVendorAll().then(resolve =>dispatch(addVendor(resolve))).catch(f=> console.log(f))
        getSubCategoryAll();
        getVendorLocationAll().then(resolve=> dispatch(addVendorLocation(resolve.data))).catch(f=> console.log(f))
    },[]);
    if(false){
        getDiscounts({ page: 0, size: 1, vendorIds:["1f764100-1919-4130-ac7e-c12e4317c1ee","3899fba6-0374-4c41-bee9-82b1d6c30417"]}).then(resolve=> console.log(resolve));
         const obj ={
             name:"test",
             vendorId:"082f37b8-5f55-4287-8131-fba49bbe03e6",
             fullDescription:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
             isOnline: false,
             imageLink:"dsfsdghjghjhfjg",
             startDate: "2017-07-19T14:25+02:00",
             endDate: "2017-07-19T14:25+02:00",
             subCategories:["987e4c20-f3ee-4978-b06f-e6babd4fef11"],
             locations:["f13c864d-6fe6-40d2-aa75-608ea2bb0021"],
             categoryId:"77d5153f-2b28-4881-ad7b-99c7b0b86595",
             percent:20
         }
         postDiscount(obj).then(resolve=> console.log(resolve));
        
    }
 return (
        <div className={"homepage"}>
            <Layout />
        </div>
    );
};

export default MainPage;