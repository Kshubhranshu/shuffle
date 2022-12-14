import React, { useState, useEffect } from "react";

import { getCategories } from "../../api/discover";

import styles from "./Category.module.css";

export default function Category() {
    async function fetchCategories() {
        const result = await getCategories();
        setCategoryList(result);
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    const [categoryList, setCategoryList] = useState([]);

    return (
        <div className={styles.containerWrapper}>
            {categoryList.map((category) => (
                <div className={styles.container}>{category.name}</div>
            ))}
        </div>
    );
}
