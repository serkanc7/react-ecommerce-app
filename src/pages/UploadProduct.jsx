import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/shared/Header';
import { getAllBrands, getAllColors, getAllCategories, getAllStatus } from '../actions';


const UploadProduct = () => {

    const [titleInput, setTitleInput] = useState('');
    const [descInput, setDescInput] = useState('');
    const [categorySelect, setCategorySelect] = useState('');
    const [brandSelect, setBrandSelect] = useState('');
    const [colorSelect, setColorSelect] = useState('');
    const [statuSelect, setStatuSelect] = useState('');
    const [isOfferable, setIsOfferable] = useState(false);
    const [priceInput, setPriceInput] = useState('');

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories);
    const brands = useSelector(state => state.brands);
    const colors = useSelector(state => state.colors);
    const status = useSelector(state => state.status);

    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getAllBrands());
        dispatch(getAllColors());
        dispatch(getAllStatus());
    }, [])

    const createProduct = () => {
        const filteredCategory = categories.categoriesData.filter((category) => category.title === categorySelect);
        const filteredBrand = brands.brandsData.filter((brand) => brand.title === brandSelect);
        const filteredColor = colors.colorsData.filter((color) => color.title === colorSelect);
        const filteredStatu = status.statusData.filter((statu) => statu.title === statuSelect);

        const product = {
            'title': titleInput,
            'description': descInput,
            'brand': filteredBrand[0],
            'category': filteredCategory[0],
            'status': filteredStatu[0],
            'color': filteredColor[0],
            'price': priceInput,
            isOfferable
        }

        console.log(product);
    }

    return (
        <>
            <Header />
            <form className="container upload-form"
                onSubmit={
                    (e) => {
                        e.preventDefault();
                        createProduct();
                    }

                }>

                <div className="upload-form__details">
                    <h2 className="upload-form__title">
                        Ürün Detayları
                    </h2>
                    <div class="form__group">
                        <label class="form__label" htmlFor="title">Ürün Adı</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            className="form-input"
                            placeholder="Örnek: Iphone 12 Pro Max"
                            onChange={(e) => setTitleInput(e.target.value)}
                            maxLength="100"
                            required />
                    </div>
                    <div class="form__group form__group--full">
                        <label class="form__label" htmlFor="description">Açıklama</label>
                        <textarea
                            name="description"
                            id="description"
                            className="form-input form__input--textarea"
                            placeholder="Ürün açıklaması girin"
                            onChange={(e) => setDescInput(e.target.value)}
                            maxLength="500"
                            required
                        ></textarea>
                    </div>
                    <div className="form__group">
                        <label className="form__label" htmlFor="category">Kategori</label>
                        <select
                            className="form-input"
                            id="category"
                            value={categorySelect}
                            required
                            onChange={(e) => setCategorySelect(e.target.value)}
                            onBlur={(e) => setCategorySelect(e.target.value)}
                        >
                            <option>Kategori seç</option>
                            {categories.categoriesData.map((category) => (
                                <option key={category.id} value={category.title}>
                                    {category.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form__group">
                        <label className="form__label" htmlFor="brand">Marka</label>
                        <select
                            className="form-input"
                            id="brand"
                            value={brandSelect}
                            required
                            onChange={(e) => setBrandSelect(e.target.value)}
                            onBlur={(e) => setBrandSelect(e.target.value)}

                        >
                            <option>Marka seç</option>
                            {brands.brandsData.map((brand) => (
                                <option key={brand.id} value={brand.title}>
                                    {brand.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form__group">
                        <label className="form__label" htmlFor="color">Renk</label>
                        <select
                            className="form-input"
                            id="color"
                            required
                            value={colorSelect}
                            onChange={(e) => setColorSelect(e.target.value)}
                            onBlur={(e) => setColorSelect(e.target.value)}

                        >
                            <option>Renk</option>
                            {colors.colorsData.map((color) => (
                                <option key={color.id} value={color.title}>
                                    {color.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form__group">
                        <label className="form__label" htmlFor="statu">Kullanım Durumu</label>
                        <select
                            className="form-input"
                            id="statu"
                            value={statuSelect}
                            onChange={(e) => setStatuSelect(e.target.value)}
                            onBlur={(e) => setStatuSelect(e.target.value)}

                        >
                            <option>Kullanım durumu seç</option>
                            {status.statusData.map((statu) => (
                                <option key={statu.id} value={statu.title}>
                                    {statu.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form__group">
                        <label className="form__label" htmlFor="price">Fiyat</label>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            className="form-input"
                            placeholder="Bir fiyat girin"
                            onChange={(e) => setPriceInput(e.target.value)}
                            required />
                        <div className="form__offer-option">
                            <span>Teklif opsiyonu</span>
                            <label className="switch">
                                <input type="checkbox" onClick={() => setIsOfferable(!isOfferable)} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="upload-form__image">
                    <h2 className="upload-form__title">
                        Ürün Görseli
                    </h2>
                    <button>Gönder</button>
                </div>

            </form>
        </>
    )
}

export default UploadProduct
