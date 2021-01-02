import { InputNumber, notification } from 'antd'
import { React, useEffect, useState } from 'react'
import { Controller, useFieldArray, useForm } from "react-hook-form"
import { GoDiffAdded } from 'react-icons/go'
import { ImCross } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { updateSingleProduct } from '../../../redux/actions/productActions'
import ImageUpload from '../newProduct/ImageUpload'



const UpdateForm = ({title, description, instructor, price, sale, features, id, handleClose}) => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.productReducer)
    const { register, control, handleSubmit, reset, trigger, setError, errors  } = useForm({
    });
    const { fields, append, remove, swap, move, insert } = useFieldArray({
      control,
      name: "feature"
    });

    
    const [productPrice, setProductPrice] = useState(price);
    const [productSale, setProductSale] = useState(sale);
    const [productTitle, setProductTitle] = useState(title);
    const [productDescription, setProductDescription] = useState(description);
    const [productInstructor, setProductInstructor] = useState(instructor);
    
    
    useEffect(() => {
        let singleFeature;
        for (let i = 0; i < features.length; i ++) {
            singleFeature = features[i];
            console.log(singleFeature)
            append({features: singleFeature})
        }
    }, [])

        const getFeaturesArr = (arr) =>{
          let features = [];
          for (let i = 0; i < arr?.length; i++) {
            const el = arr[i];
            features.push(el['feature'])
          }
          return features;
        }
  
        const openNotificationWithIcon = type => {
          notification[type]({
            message: 'Notification Title',
            description:
              'You have created your a new product Successfully! Have fun',
          }); 
        };
  
        const setNotification = () =>{
          openNotificationWithIcon('success')
        }
        const onSubmit = async (data) =>{
          const features = getFeaturesArr(data.features);
  
            const body = {
              title: productTitle,
              description: productDescription,
              instructor: productInstructor,
              features: features && features,
              price: productPrice, 
              sale: productSale && productSale > 0 ? productSale / 100 : false,
            //   image: "https://img-b.udemycdn.com/course/240x135/1399390_4a26_2.jpg?secure=9QtgUgMe3V-hp6LocA0nxA%3D%3D%2C1606363580",
            }
           dispatch(updateSingleProduct(id, body, products, setNotification, handleClose))
  
        }
  
        function onPriceChange(value) {
          setProductPrice(value);
        }
        function onSaleChange(value) {
          setProductSale(value);
        }
  
    return (
        <>
             <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
               <div className="product-form__item">
                  <label className="product-form__item-label" for="title">Title:</label>
                  <input 
                    value={productTitle}  
                    onChange={(e) => setProductTitle(e.target.value)}
                    className="product-form__item--input" 
                    id="title"
                    placeholder="Title of the product" 
                    name="title" 
                    ref={register({ required: true })} 
                  />
                  {errors.exampleRequired && <span>Title is required!</span>}
               </div>
               <div className="product-form__item">
                  <label className="product-form__item-label" for="instructor">Instructor:</label>
                  <input 
                    value={productInstructor}
                    onChange={(e) =>setProductInstructor(e.target.value)}
                    className="product-form__item--input" 
                    id="instructor"  
                    placeholder="Name of the Instructor" 
                    name="instructor" 
                    ref={register({ required: true })} 
                  />
                  {errors.exampleRequired && <span>This field is required</span>}
               </div>
               <div className="product-form__item">
                  <label className="product-form__item-label" for="price">Price:</label>
                  <InputNumber
                    defaultValue={productPrice}
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={onPriceChange}
                  />
               </div>
               <div className="product-form__item">
                  <label className="product-form__item-label" for="sale">Sale:(%)</label>
                  <InputNumber
                      defaultValue={productSale}
                      min={0}
                      max={100}
                      formatter={value => `${value}%`}
                      parser={value => value.replace('%', '')}
                      onChange={onSaleChange}
                    />
               </div>
               <div className="product-form__item">
                  <label className="product-form__item-label" for="description">Description:</label>
                  <textarea 
                    value={productDescription}
                    onChange={(e) =>setProductDescription(e.target.value)}
                    id="description" 
                    name="description" 
                    placeholder="Short description of the product. A description of 12 words is standard." 
                    ref={register({ required: true })}
                    className="product-form__item--input" rows="8" cols="55"
                  ></textarea>
                  
                  {errors.exampleRequired && <span>This field is required</span>}
               </div>

              <div className="product-form__feature">
                <label 
                className="product-form__feature-create-button" 
                onClick={() => append({ features: 'Product Features..' })} 
                for="features"
                > 
                <span className="product-form__feature-create-button-text">
                  <GoDiffAdded />
                  Add Features
                </span>
                
                </label>
                <ul>
                    {fields.map((item, index) => (
                    <li className="product-form__feature-item" key={item.id}>
                        <Controller
                        as={<input className="product-form__feature-item-input" />}
                        name={`features[${index}].feature`}
                        control={control}
                        defaultValue={item.features}
                        />
                          <ImCross className="product-form__feature-item-remove" type="button" onClick={() => remove(index)} />
                    </li>
                    ))}
                </ul>
              </div>

              <div>
                <ImageUpload />
              </div>
        <input 
          className="product-form__button" 
          type="submit" 
          value="Update now" 
        />
    </form>
        </>
    )
}

export default UpdateForm
