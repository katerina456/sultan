import React from "react";
import Wrapper from "./Wrapper";
import InputMy from "./UI/input/InputMy";
import InputSmall from "./UI/input/InputSmall";
import ProductsItem from "./ProductsItem";
/* import ButtonOrange from "./UI/button/ButtonOrange";
import ButtonRound from "./UI/button/ButtonRound"; */

import '../styles/App.css';
import '../styles/main.css';

import productsList from "../productsList.json";

import search from './icons/search.svg';
import polygon from './icons/polygon5.svg';
/* import delet from './icons/delete.svg'; */

const Catalog = function(props) {
    const menuArray = ['Уход за телом',
                        'Уход за руками',
                        'Уход за ногами',
                        'Уход за лицом',
                        'Уход за волосами',
                        'Средства для загара',
                        'Средства для бритья',
                        'Подарочные наборы',
                        'Гигиеническая продукция',
                        'Гигиена полости рта',
                        'Бумажная продукция'
    ];

    const [products, setProducts] = React.useState(productsList.array);

    const manufactorerArray = [];

    products.forEach(item => {
        let manufact = item.manufacturer;
        let index = manufactorerArray.findIndex(e => e.name === manufact);
        if (index > -1) {
            manufactorerArray[index].count ++;
        } else {
            let obj = {};
            obj.name = manufact;
            obj.count = 1;
            manufactorerArray.push(obj);
        }
    })

    manufactorerArray.sort((prev, next) => {
        if ( prev.name < next.name ) return -1;
        if ( prev.name < next.name ) return 1;
    })

    const [brandInput, setBrandInput] = React.useState('');

    const handleOnInput = (text) => {
        setBrandInput(text); 
    };

    const selecredManufactorerArray = React.useMemo(() => {
        if (brandInput) {
            return manufactorerArray.filter(item => {
                let str = item.name.toLowerCase()
                return str.includes(brandInput.toLowerCase());
            })
        } else {
            return manufactorerArray  
        }
    }, [brandInput])

    const [limit, setLimit] = React.useState(true);

    function toggleLimit() {
        setLimit(prev => !prev)
    }


    const selectArray = ['по цене по убыванию',
                        'по цене по возрастанию',
                        'по названию по убыванию',
                        'по названию по возрастанию'
    ];

    const [select, setSelect] = React.useState(false);

    function toggleSelect() {
        setSelect( prev => !prev );
    }

    const [selectedSort, setSelectedSort] = React.useState('Название');

    function sortProducts(event) {
        
       let sortStr = event.target.textContent;

        setSelectedSort(event.target.textContent);
        toggleSelect();

        let array = sortStr.split(' ');
        
        let sort = array[1] === 'цене' ? 'price' : 'name';
        let toLower = array[3] === 'убыванию' ? true : false;

        if (sort === 'price') {
            setProducts(prev => {
                prev.sort((prev, next) => {

                    if (!toLower) {
                        if ( prev.price < next.price ) return -1;
                        if ( prev.price < next.price ) return 1;
                    } else {
                        if ( prev.price > next.price ) return -1;
                        if ( prev.price < next.price ) return 1;
                    }
                    
                });
                return prev;
            })
        } else {
            setProducts(prev => {
                prev.sort((prev, next) => {

                    if (toLower) {
                        if ( prev.name < next.name ) return -1;
                        if ( prev.name < next.name ) return 1;
                    } else {
                        if ( prev.name > next.name ) return -1;
                        if ( prev.name < next.name ) return 1;
                    }
                    
                });
                return prev;
            })
        }
    }


    const [searchQuery, setSearchQuery] = React.useState('');

    function changeSearchQuery(event, text) {
        if (searchQuery.element !== event.currentTarget) {
            if (searchQuery) searchQuery.element.style.background = '';
            setSearchQuery({'element': event.currentTarget,
                            'text': text
            });
            event.currentTarget.style.background = '#d9d9d9';
        } else {
            setSearchQuery('');
            event.currentTarget.style.background = '';
        }     
    }

    const sortedProducts = React.useMemo(() => {
        if (!searchQuery) {
            return products;
        } else return products.filter(item => {
            return item.careType.includes(searchQuery.text.toLowerCase());
        })

    }, [searchQuery, products, selectedSort]);

    const [selectedBrand, setSelectedBrand] = React.useState(
        new Array(selecredManufactorerArray.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = selectedBrand.map((item, index) =>
          index === position ? !item : item
        );

        setSelectedBrand(updatedCheckedState); 
    };

    const manufacturersForSort = React.useMemo(() => {
        let array = []
        selectedBrand.forEach((item, index) => {
            if (item) {
                array.push(selecredManufactorerArray[index].name)
            }
        })
        return array
    }, [selectedBrand])


    const [searchPriceMin, setsearchPriceMin] = React.useState(0)
    const [searchPriceMax, setsearchPriceMax] = React.useState(1000)

    const filteredProducts = React.useMemo(() => {
        let obj = sortedProducts.filter(item => {
            return (item.price<searchPriceMax && item.price>searchPriceMin)
        })

        if (manufacturersForSort.length !== 0) {
            obj = obj.filter(item => {
                return manufacturersForSort.includes(item.manufacturer);
            })
        }
        
        return obj;

    }, [searchPriceMin, searchPriceMax, selectedSort, searchQuery, manufacturersForSort])


    return (
        <Wrapper>
            <div className="catalog-header">
                <h2 className="catalog-title">Косметика и гигиена</h2>
                <div className="catalog-sort">
                    <p className="catalog-header-boldText">Сортировка:</p>

                    <div className="select">
                        <div className="select-title" onClick={toggleSelect}>
                            <p className="catalog-header-text">{selectedSort}</p>
                            <img src={polygon} alt="" />
                        </div>
                            
                        {select && <div className="option">
                            {selectArray.map(item =>  
                                <p className="catalog-header-text" key={item}
                                    onClick={(event) => sortProducts(event)}
                                >
                                {item}
                                </p>
                            )}
                        </div>}
                    </div>
                </div>
            </div>

            <div className="catalog-filter">
                {menuArray.map(item => 
                    <div className="catalog-filter-item" key={item + '1'} 
                        onClick={(event) => changeSearchQuery(event, item)}>
                        <p className="catalog-text">{item}</p>
                    </div>
                )}
            </div>

            <div className="catalig-main">
                <div className="catalig-main-filter">
                    <h3 className="catalog-main-item-h3" style={{marginBottom: '10px'}}>
                        ПОДБОР ПО ПАРАМЕТРАМ
                    </h3>
                    <p className="catalig-main-price">Цена <span>₸</span></p>
                    <div className="price-diapasone">
                        <InputSmall placeholder={0} index={0} 
                            handleChange={number => {
                                setsearchPriceMin(number)
                            }} value={searchPriceMin} />
                        <span>-</span>
                        <InputSmall placeholder={10000} index={1} 
                            handleChange={number => {
                                setsearchPriceMax(number)
                            }} value={searchPriceMax} />
                    </div>
                    

                    <h3 className="catalog-main-item-h3" 
                        style={{textTransform: 'none'}}>Производитель
                    </h3>
                    <InputMy placeholder='Поиск...' img={search} width='238px' 
                        handleOnInput={handleOnInput} value={brandInput}
                    />

                    <div className="catalog-checkbox">       
                        {selecredManufactorerArray.map((item, index) => {
                            let number = limit ? 4 : selecredManufactorerArray.length;
                            if (index < number) { 
                                return (<div className="catalog-checkbox-item" key={item.name}>
                                <input type="checkbox" id={item.name} name="manufacturer" 
                                    value={item.name} checked={selectedBrand[index]} 
                                    onChange={() => handleOnChange(index)}
                                />
                                <label htmlFor={item.name} className="checkbox-label">
                                    {item.name} <span>({item.count})</span>
                                </label>
                                </div>)
                            }
                        }
                        )}           
                    </div>

                    <div className="show-all" onClick={toggleLimit}>
                        <p className="show-all-text">
                            {limit? 'Показать все ' : 'Свернуть '}
                        </p>
                        <img src={polygon} alt="" />
                    </div>
                    
                    <hr className="separator" />

                    <h3 className="catalog-main-item-h3">Уход за телом</h3>

                    {menuArray.map((item, index) => 
                        <p key={item + index} className="catalog-text catalog-text-left"
                            onClick={(event) => changeSearchQuery(event, item)}
                        >
                            {item}
                        </p>
                    )}

                    {/* <div className="button-box">
                        <ButtonOrange text='Показать' 
                            width='169px' handleClick={addFilter} 
                        />

                        <ButtonRound img={delet} handleClick={removeFilter} />
                    </div> */}
   
                </div>

                <div className="catalog-products">
                    {
                        filteredProducts.map(product => {
                            return <ProductsItem 
                                    key={product.cod} 
                                    info={product} 
                                    handleClick={props.handleClick} 
                                    addClick={props.addBasketProduct}
                                />
                        })
                    }
                </div>
            </div>
        </Wrapper> 
    )
}

export default Catalog;