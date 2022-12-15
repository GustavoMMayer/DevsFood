import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { CategoryList, Container, CategoryArea, ProductArea, ProductList, ProductPaginationArea, ProductPaginationItem} from './styled';

import api from '../../api/api'

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProducItem from '../../components/ProductItem';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct'

let serchTimer = null;


export default () => {
    const history = useHistory();
    const [headerrSearch, setHeaderSearch]= useState('');
    const [categories, setCategories] = useState([]);
    const [produscts, setProducts]= useState([]);
    const [totalPages, setTotalPages] =useState(0);
    

    const [activeCategory, setActiveCategory] = useState(0);
    const [activePage , setActivePage] = useState(1);
    const [activeSearch, setActiveSearch] = useState('');

    const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState ({});

    const getProducts = async ()=>{
        const prods = await api.getProducts(activeCategory,activePage,activeSearch);

        if(prods.error== ''){
            setProducts(prods.result.data);
            setActivePage(prods.result.page);
            setTotalPages(prods.result.pages)
        }
    }

    const handleProductClick = (data)=>{
        setModalData(data);
        setModalStatus(true)

    };

    useEffect(()=>{
        const getCategories = async()=>{
        const cat =await api.getCategories();
        if(cat.error==''){
            setCategories(cat.result);
        }
        };
        getCategories();
        
    },[]);

    useEffect(()=>{
        clearTimeout(serchTimer)
        serchTimer = setTimeout(()=>{
            setActiveSearch(headerrSearch)
            
        },2000)
    },[headerrSearch]);

    useEffect(()=>{
        setProducts([]);
        getProducts(); 
        
    },[activeCategory,activePage, activeSearch]);

    const handleButtonClick = () => {
        history.push('/tela2/testador');
    }

    return (
        <Container>
            <Header search={headerrSearch} onSearch={setHeaderSearch}/>

            {categories.length > 0 &&
                
                <CategoryArea>
                    Selecione uma categoria

                    <CategoryList>
                        <CategoryItem 
                        data={{
                            id:0,
                            name:'Todas as categorias',
                            image:'./Assets/food-and-restaurant.png' }}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}/>

                        {categories.map((item, index)=>(
                            <CategoryItem 
                                key={index} 
                                data={item} 

                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}/>
                        ))}
                        
                    </CategoryList>

                </CategoryArea>
                
            }
                {produscts.length > 0 &&
                <ProductArea>
                    <ProductList>
                        {produscts.map((item, index)=>(
                            <ProducItem key={index} data={item} onClick={handleProductClick}/>
                        ))}
                    </ProductList>

                </ProductArea>
                }

                {totalPages > 0 &&
                    <ProductPaginationArea>
                        
                            {Array(totalPages).fill(0).map((item, index)=>(
                                 <ProductPaginationItem 
                                    key ={index} 
                                    active = {activePage} 
                                    current={index+1}
                                    onClick = {()=>setActivePage(index+1)}> 
                                   {index +1}

                                 </ProductPaginationItem>         

                            ))}                        
                    </ProductPaginationArea>
                    }
                    <Modal status ={modalStatus} setStatus={setModalStatus}>
                        <ModalProduct data={modalData} setStatus={setModalStatus}/>

                        
                    </Modal>

        </Container>
    );
}