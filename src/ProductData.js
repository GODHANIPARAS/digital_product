import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import QrScanner from 'react-qr-scanner';
// import axios from 'axios';
import { Card, Image, Empty } from 'antd';
import Lottie from 'lottie-react';
import animationData from './lottiefiles/location.json';

const ProductData = () => {
    const productData = [
        {
            id: "1",
            product_name: "mobile",
            product_image: "https://secondkart.in/uploads/portfolio/1/1691502459410915680-big.jpeg",
            product_description: "samsung s24 ultra",
            product_category: "electronic",
            product_price: 80000,
        },
        {
            id: "1",
            product_name: "mobile",
            product_image: "https://secondkart.in/uploads/portfolio/1/1691502459410915680-big.jpeg",
            product_description: "samsung s24 ultra",
            product_category: "electronic",
            product_price: 80000,
        }, {
            id: "1",
            product_name: "mobile",
            product_image: "https://secondkart.in/uploads/portfolio/1/1691502459410915680-big.jpeg",
            product_description: "samsung s24 ultra",
            product_category: "electronic",
            product_price: 80000,
        }, {
            id: "1",
            product_name: "mobile",
            product_image: "https://secondkart.in/uploads/portfolio/1/1691502459410915680-big.jpeg",
            product_description: "samsung s24 ultra",
            product_category: "electronic",
            product_price: 80000,
        }, {
            id: "1",
            product_name: "mobile",
            product_image: "https://secondkart.in/uploads/portfolio/1/1691502459410915680-big.jpeg",
            product_description: "samsung s24 ultra",
            product_category: "electronic",
            product_price: 80000,
        }, {
            id: "1",
            product_name: "mobile",
            product_image: "https://secondkart.in/uploads/portfolio/1/1691502459410915680-big.jpeg",
            product_description: "samsung s24 ultra",
            product_category: "electronic",
            product_price: 80000,
        }, {
            id: "1",
            product_name: "mobile",
            product_image: "https://secondkart.in/uploads/portfolio/1/1691502459410915680-big.jpeg",
            product_description: "samsung s24 ultra",
            product_category: "electronic",
            product_price: 80000,
        }, {
            id: "1",
            product_name: "mobile",
            product_image: "https://secondkart.in/uploads/portfolio/1/1691502459410915680-big.jpeg",
            product_description: "samsung s24 ultra",
            product_category: "electronic",
            product_price: 80000,
        }, {
            id: "1",
            product_name: "mobile",
            product_image: "https://secondkart.in/uploads/portfolio/1/1691502459410915680-big.jpeg",
            product_description: "samsung s24 ultra",
            product_category: "electronic",
            product_price: 80000,
        }, {
            id: "1",
            product_name: "mobile",
            product_image: "https://secondkart.in/uploads/portfolio/1/1691502459410915680-big.jpeg",
            product_description: "samsung s24 ultra",
            product_category: "electronic",
            product_price: 80000,
        }, {
            id: "1",
            product_name: "mobile",
            product_image: "https://secondkart.in/uploads/portfolio/1/1691502459410915680-big.jpeg",
            product_description: "samsung s24 ultra",
            product_category: "electronic",
            product_price: 80000,
        },
    ]

    const sellerData = {
        id: "2",
        username: "Amit P",
        shopname: "Abc A",
        email: "abc@gmail.com",
        mobile: 9876543210,
        location: "https://maps.app.goo.gl/jXU2SmbPXMshhjo98",
    }

    const locationRedirect = () => {
        window.location.href = sellerData.location
    }

    const { userId } = useParams();
    console.log({ userId });
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/product/get/${userId}`);
                setProduct(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchProduct();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div >
                <div style={{ display: "flex" }}>

                    {/* seller data */}
                    {sellerData && <div style={{ width: "50%" }}>
                        <h2 style={{ marginLeft: '7%' }}>Seller Details</h2>
                        <Card
                            hoverable
                            title={<Lottie animationData={animationData} onClick={() => locationRedirect()} style={{ cursor: 'pointer' }} />}
                            style={{
                                width: 500,
                                marginLeft: '7%',
                                border: "1px solid grey"
                            }}
                        >
                            &nbsp;
                            <p>
                                Seller Name: &emsp;<b>{sellerData.username}</b>
                            </p>
                            <p>
                                Shop Name:&emsp;<b>{sellerData.shopname}</b>
                            </p>
                            <p>
                                Seller Email:&emsp;<b>{sellerData.email}</b>
                            </p>
                            <p>
                                Seller Mobile No:&emsp;<b>{sellerData.mobile}</b>
                            </p>
                        </Card>
                    </div>}

                    {!sellerData && <Empty description="Seller Data Currently Unavailable" />}

                    {/* product data */}
                    {console.log(window.innerHeight, "height")}
                    <div style={{ margin: '50px', gap: '30px', width: "50%", display: "flex", flexWrap: 'wrap', overflow: "auto", height: (window.innerHeight - 100) }}>
                        {product && product.map((val) => {
                            return (
                                <>

                                    <Card
                                        hoverable
                                        style={{
                                            width: 300,
                                            border: "1px solid grey"
                                        }}
                                    >
                                        <Image
                                            alt='image'
                                            src={val.product_image}
                                            height={150}
                                            width={250}
                                        />
                                        &nbsp;
                                        <p>
                                            Product Name: <b>{val.product_name}</b>
                                        </p>
                                        <p>
                                            Product Description:<b> {val.product_description}</b>
                                        </p>
                                        <p>
                                            Product Category:<b> {val.product_category}</b>
                                        </p>
                                        <p>
                                            Product Price:<b> {val.product_price}</b>
                                        </p>
                                    </Card>
                                    <br />
                                </>
                            )
                        })}

                    </div>
                    {!productData && <Empty description="Currently No Product Available" />}
                </div>
            </div>
        </>
    )
}

export default ProductData