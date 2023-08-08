import React, { useState } from 'react'
import styles from './Tabs.module.css'

const Tabs = (props) => {
    // keep track of selected tab index
    const [tabSelected, setTabSelected] = useState(0);
    const {contentList} = props;
    const handleTabClick = (index) => {
        setTabSelected(index);
    }
    
    return (
    <div>
        {
            contentList.map((tabs, index) => (
            <div key= {index} onClick={() => handleTabClick(index) } className={`${styles.tabContainer} ${tabSelected === index ? styles.activeTab : " "}`}>Tab {index + 1}</div>
            

        ))}
        <div className={styles.tabContent}>
            {contentList[tabSelected]}
        </div>

    </div>
    )
}

export default Tabs