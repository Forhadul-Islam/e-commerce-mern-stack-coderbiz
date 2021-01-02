import { InputNumber, notification } from 'antd';
import React, { useState } from 'react';
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { GoDiffAdded } from 'react-icons/go';
import { ImCross } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { uploadProduct } from '../../../redux/actions/productActions';
import ImageUpload from './ImageUpload';


const ProductForm = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.productReducer)

    const { register, control, handleSubmit, reset, trigger, setError, errors  } = useForm({
      });
      const { fields, append, remove, swap, move, insert } = useFieldArray({
        control,
        name: "feature"
      });

      const [price, setPrice] = useState();
      const [sale, setSale] = useState()

      const getFeaturesArr = (arr) =>{
        let features = [];
        for (let i = 0; i < arr?.length; i++) {
          const el = arr[i];
          features.push(el['feature'])
        }
        return features;
      }

      //notification
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
        const {title, description, instructor} = data;
        const features = getFeaturesArr(data.features);

          const body = {
            title,
            description,
            instructor,
            features: features && features,
            price, 
            sale: sale && sale !== 0 ? sale/100 : false,
            image: "https://img-b.udemycdn.com/course/240x135/1399390_4a26_2.jpg?secure=9QtgUgMe3V-hp6LocA0nxA%3D%3D%2C1606363580",
          }
         dispatch(uploadProduct(body, products, setNotification))

      }

      function onPriceChange(value) {
        setPrice(value);
      }
      function onSaleChange(value) {
        setSale(value);
      }


    return (
        <>
             <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
               <div className="product-form__item">
                  <label className="product-form__item-label" for="title">Title:</label>
                  <input className="product-form__item--input" id="title"
                  placeholder="Title of the product" name="title" ref={register({ required: true })} />
                  {errors.exampleRequired && <span>Title is required!</span>}
               </div>
               <div className="product-form__item">
                  <label className="product-form__item-label" for="instructor">Instructor:</label>
                  <input className="product-form__item--input" id="instructor"  
                  placeholder="Name of the Instructor" name="instructor" ref={register({ required: true })} />
                  {errors.exampleRequired && <span>This field is required</span>}
               </div>
               <div className="product-form__item">
                  <label className="product-form__item-label" for="price">Price:</label>
                  <InputNumber
                    defaultValue={1000}
                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    onChange={onPriceChange}
                  />
               </div>
               <div className="product-form__item">
                  <label className="product-form__item-label" for="sale">Sale:(%)</label>
                  <InputNumber
                      defaultValue={100}
                      min={0}
                      max={100}
                      formatter={value => `${value}%`}
                      parser={value => value.replace('%', '')}
                      onChange={onSaleChange}
                    />
               </div>
               <div className="product-form__item">
                  <label className="product-form__item-label" for="description">Description:</label>
                  <textarea id="description" name="description" placeholder="Short description of the product. A description of 12 words is standard." ref={register({ required: true })} className="product-form__item--input" rows="8" cols="55"></textarea>
                  
                  {errors.exampleRequired && <span>This field is required</span>}
               </div>

              <div className="product-form__feature">
                <label 
                className="product-form__feature-create-button" 
                onClick={() => append({ features: 'Write a feature...' })} 
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
          value="Create Product" 
        />
    </form>
        </>
    )
}

export default ProductForm
