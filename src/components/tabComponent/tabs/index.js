import React, { useState } from "react";
import FirstTab from "./allTabs/firstTab";
import SecondTab from "./allTabs/secondTab";
import ThirdTab from "./allTabs/thirdTab";
import styles from "./style.module.scss";

const Tabs = () => {
	const [activeTab, setActiveTab] = useState(0);

	const tabs = [<FirstTab />, <SecondTab />, <ThirdTab />];

	const handleTab1 = () => {
		setActiveTab(0);
	};

	const handleTab2 = () => {
		setActiveTab(1);
	};

	const handleTab3 = () => {
		setActiveTab(2);
	};

	return (
		<div className={styles.tabs}>
			<div className={styles.left}>
				<ul>
					<li
						className={
							activeTab === 0 ? styles.active : styles.inactive
						}
						onClick={handleTab1}
					>
						Include Jr
					</li>
					<li
						className={
							activeTab === 1 ? styles.active : styles.inactive
						}
						onClick={handleTab2}
					>
						MTI Studio
					</li>
					<li
						className={
							activeTab === 2 ? styles.active : styles.inactive
						}
						onClick={handleTab3}
					>
						Womaneer
					</li>
				</ul>
			</div>
			<div className={styles.right}>
				<div className="outlet">{tabs[activeTab]}</div>
			</div>
		</div>
	);
};
export default Tabs;
