import styles from './search_header.module.css';
import React, { useRef } from 'react';

function SearchHeader({ onSearch }) {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    };
    const onClick = () => {
        handleSearch();
    };

    const onKeyPress = (event) => {
        if(event.key === 'Enter') handleSearch();
        
    };
  return (
    <header className={styles.header}>
    <img className={styles.img} src="/images/img.png" width={40} alt="logo" />
    <h1 className={styles.title}>Youtube</h1>
    <div className={styles.search_box}>
        <input 
            ref={inputRef}
            className={styles.input} 
            type="search" placeholder='검색어를 입력하세요' 
            onKeyPress={onKeyPress} 
        />
        {/* button은 input과 같이 쓰기 때문에 type을 submit으로 설정 */}
        <button className={styles.button} type='submit' onClick={onClick}>검색</button>
    </div>
</header>
  )
}

export default SearchHeader;


