import { useEffect, useState } from "react";
import styles from './Dropdown.module.css';

interface DropdownOption {
    value: string,
    label: string
};

export default function ReactDropDown({ options }: { options: DropdownOption[] }) {
    const [dropdownOptions, setDropdownOptions] = useState(options);
    const [dropdownStatus, setDropdownStatus] = useState<"closed" | "open">("closed");
    const [selectedOption, setSelectedOption] = useState<DropdownOption>(dropdownOptions[0]);

    const handleClickOutside = (event: MouseEvent) => {
        if (!(event.target instanceof Element) || !event.target.closest("#slick-react-dropdown")) {
            setDropdownStatus("closed");
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const dropdownToggle = () => {
        dropdownStatus == "closed" ? setDropdownStatus("open") : setDropdownStatus("closed");

    }

    const itemClick = (itemValue: string) => {
        const item: DropdownOption = dropdownOptions.find((option) => option.value == itemValue) || dropdownOptions[0];
        setSelectedOption(item);
        setDropdownStatus("closed");
    };

    return (
        <>
            <div>Selected Option = {selectedOption.label} : {selectedOption.value}</div>
            <div className={styles.parentContainer}>
                <div className={styles.dropdownContainer}>
                    <div className={styles.dropdown}>
                        {dropdownStatus == "closed" && <div className={styles.dropdownItem} id="slick-react-dropdown" onClick={dropdownToggle}>{selectedOption.label}</div>}
                        {dropdownStatus == "open" && dropdownOptions.map((option) => {
                            return (
                                <div key={option.value}
                                    className={styles.dropdownItem}
                                    onClick={() => itemClick(option.value)}>
                                    {option.label}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div >
        </>
    )
}