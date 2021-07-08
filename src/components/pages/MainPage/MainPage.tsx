import React, {useEffect} from 'react';
import Layout from "../../common/Layout/Layout";
import "./MainPage.scss";
import {useAppDispatch} from "../../../store/Redux-toolkit-hook";
import {addCategory, addVendor, addVendorLocation} from "../../../store/filtersStore";
import {getCategoryAll, getVendorLocationAll, getVendorAll, postSubCategory,getSubCategoryAll, getSubCategoryId,deleteSubCategoryId, restSubCategory } from "../../../http/filtersApi"
import {postDiscount, getDiscounts} from "../../../http/discountApi"
const MainPage = () => {
    const dispatch = useAppDispatch();
    useEffect(()=>{
        getCategoryAll().then(resolve=> {dispatch(addCategory(resolve.data)); console.log(resolve.data)}).catch(f=> console.log(f))
        getVendorAll().then(resolve =>{dispatch(addVendor(resolve)); console.log(resolve)}).catch(f=> console.log(f))
        getSubCategoryAll().then(resolve=> console.log(resolve));
        getVendorLocationAll().then(resolve=> {dispatch(addVendorLocation(resolve.data)); console.log(resolve.data)}).catch(f=> console.log(f))
    },[]);
    if(true){
        getDiscounts({ page: 0, size: 1, vendorIds:["1f764100-1919-4130-ac7e-c12e4317c1ee","3899fba6-0374-4c41-bee9-82b1d6c30417"]}).then(resolve=> console.log(resolve));
        // const obj ={
        //     name:"test",
        //     vendorId:"082f37b8-5f55-4287-8131-fba49bbe03e6",
        //     fullDescription:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        //     isOnline: false,
        //     imageLink:"dsfsdghjghjhfjg",
        //     startDate: "2017-07-19T14:25+02:00",
        //     endDate: "2017-07-19T14:25+02:00",
        //     subCategories:["987e4c20-f3ee-4978-b06f-e6babd4fef11"],
        //     locations:["f13c864d-6fe6-40d2-aa75-608ea2bb0021"],
        //     categoryId:"77d5153f-2b28-4881-ad7b-99c7b0b86595",
        //     percent:20
        // }
        // postDiscount(obj).then(resolve=> console.log(resolve));
        // restSubCategory("28d2073f-0a77-4983-bbe3-40d6c6b0d24b",{name:"Test"})
        // deleteSubCategoryId("5f665270-14c3-45ef-8f08-df98f1e73763").then(resolve=> console.log(resolve));
        // getSubCategoryAll().then(resolve=> console.log(resolve));
        // postSubCategory({name: "test", categoryId:"b3f0ddbb-9c78-4bb8-9ad9-57102e56cddb"}).then(resolve=> console.log(resolve));
        // postSubCategory({name: "Sushi", categoryId:"b3f0ddbb-9c78-4bb8-9ad9-57102e56cddb"});
        // postSubCategory({name: "Meal delivery", categoryId:"b3f0ddbb-9c78-4bb8-9ad9-57102e56cddb"});
        // postSubCategory({name: "Healthy food", categoryId:"b3f0ddbb-9c78-4bb8-9ad9-57102e56cddb"});
        // postSubCategory({name: "Sportwear", categoryId:"77d5153f-2b28-4881-ad7b-99c7b0b86595"});
        // postSubCategory({name: "Sushi", categoryId:"77d5153f-2b28-4881-ad7b-99c7b0b86595"});
        // postSubCategory({name: "Tennis", categoryId:"77d5153f-2b28-4881-ad7b-99c7b0b86595"});
        // postSubCategory({name: "Fitness", categoryId:"77d5153f-2b28-4881-ad7b-99c7b0b86595"});
        // postSubCategory({name: "Gym", categoryId:"77d5153f-2b28-4881-ad7b-99c7b0b86595"});

        // postSubCategory({name: "Make up", categoryId:"fe8414ac-ceb9-48d9-8697-9b6d4c82f519"});
        // postSubCategory({name: "Manicure", categoryId:"fe8414ac-ceb9-48d9-8697-9b6d4c82f519"});
        // postSubCategory({name: "Cosmetology", categoryId:"fe8414ac-ceb9-48d9-8697-9b6d4c82f519"});
        // postSubCategory({name: "Epilation", categoryId:"fe8414ac-ceb9-48d9-8697-9b6d4c82f519"});

        // postSubCategory({name: "Tour", categoryId:"5fc75ce8-f82d-444f-82da-ac73b94f051a"});
        // postSubCategory({name: "Quest room", categoryId:"5fc75ce8-f82d-444f-82da-ac73b94f051a"});
    }
 return (
        <div className={"homepage"}>
            <Layout />
        </div>
    );
};

export default MainPage;