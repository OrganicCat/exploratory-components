interface DropdownOption {
    value: string,
    label: string
};

const DungeonsAndDragonsClasses: DropdownOption[] = [
    { value: '', label: 'Select a class' },
    { value: 'barbarian', label: 'Barbarian' },
    { value: 'bard', label: 'Bard' },
    { value: 'cleric', label: 'Cleric' },
    { value: 'druid', label: 'Druid' },
    { value: 'fighter', label: 'Fighter' },
    { value: 'monk', label: 'Monk' },
    { value: 'paladin', label: 'Paladin' },
    { value: 'ranger', label: 'Ranger' },
    { value: 'rogue', label: 'Rogue' },
    { value: 'sorcerer', label: 'Sorcerer' },
    { value: 'warlock', label: 'Warlock' },
    { value: 'wizard', label: 'Wizard' },
]

export function getDungeonsAndDragonsClasses(): DropdownOption[] {
    return DungeonsAndDragonsClasses;
}