import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Header from '../components/shared/Header'
import { getProductDetail, purchaseProduct } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal';


const ProductDetail = () => {
    const [showModal, setShowModal] = useState(false)
    const productDetail = useSelector(state => state.productDetail);
    const dispatch = useDispatch();
    const { id } = useParams();


    const toggleModal = () => {
        setShowModal(prev => !prev);
    }

    useEffect(() => {
        dispatch(getProductDetail(id));
    }, [dispatch, id]);

    const buyProduct = () => {
        dispatch(purchaseProduct(id));
        setShowModal(prev => !prev);
    }

    console.log(productDetail.productData);
    return (
        <>
            <Header />

            <main className="product-detail container">
                {
                    productDetail.productData.imageUrl && (
                        <>  <div className="product-detail__img">
                            <img src={productDetail.productData.imageUrl} alt={productDetail.productData.title} />
                        </div>

                            <div className="product-detail__content">
                                <h1 className="product-detail__title">{productDetail.productData.title}</h1>
                                <div className="product-detail__info">
                                    <div className="product-detail__info-title">Marka:</div>
                                    <div className="product-detail__info-value">{productDetail.productData.brand.title}</div>
                                </div>
                                <div className="product-detail__info">
                                    <div className="product-detail__info-title">Renk:</div>
                                    <div className="product-detail__info-value">{productDetail.productData.color.title}</div>
                                </div>
                                <div className="product-detail__info">
                                    <div className="product-detail__info-title">Kullanım Durumu:</div>
                                    <div className="product-detail__info-value">{productDetail.productData.status.title}</div>
                                </div>
                                <div className="product-detail__price">{productDetail.productData.price} TL</div>
                                <div className="product-detail__buttons">
                                    {!productDetail.productData.isSold &&
                                        <button
                                            className="product-detail__button product-detail__button--buy"
                                            onClick={toggleModal}
                                        >
                                            Satın Al
                                        </button>
                                    }
                                    {
                                        showModal &&
                                        <Modal>
                                            <div className="modal-content">
                                                <h2 className="modal-content__title">Satın Al</h2>
                                                <p className="modal-content__text">Satın Almak istiyor musunuz?</p>
                                                <div className="modal-content__buttons">
                                                    <button className="modal-content__button modal-content__button--cancel" onClick={toggleModal}>Close</button>
                                                    <button className="modal-content__button modal-content__button--buy" onClick={buyProduct}>Satın Al</button>
                                                </div>
                                            </div>
                                        </Modal>
                                    }
                                    {!productDetail.productData.isSold && productDetail.productData.isOfferable &&
                                        <button
                                            className="product-detail__button product-detail__button--offer"
                                        >Teklif Ver
                                        </button>
                                    }
                                    {
                                        productDetail.productData.isSold &&
                                        <div className="product-detail__issold">Bu Ürün Satışta Değil</div>

                                    }
                                </div>

                                <h2 className="product-detail__overview-title">Açıklama</h2>
                                <p className="product-detail__overview">{productDetail.productData.description}</p>
                            </div>
                        </>
                    )
                }

            </main>
        </>
    )
}

export default ProductDetail
