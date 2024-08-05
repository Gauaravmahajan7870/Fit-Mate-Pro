document.addEventListener('DOMContentLoaded', () => {
    const slots = [
        { time: '6:00 AM - 7:00 AM', crowded: false },
        { time: '7:00 AM - 8:00 AM', crowded: true },
        { time: '8:00 AM - 9:00 AM', crowded: false },
        { time: '5:00 PM - 6:00 PM', crowded: true },
        { time: '6:00 PM - 7:00 PM', crowded: false },
    ];

    const slotContainer = document.getElementById('slots');
    const timeSlotSelect = document.getElementById('time-slot');
    const form = document.getElementById('form');

    // Display slots
    slots.forEach((slot, index) => {
        const slotDiv = document.createElement('div');
        slotDiv.textContent = slot.time + (slot.crowded ? ' (Crowded)' : ' (Not Crowded)');
        slotContainer.appendChild(slotDiv);

        // Add options to select
        const option = document.createElement('option');
        option.value = index;
        option.textContent = slot.time;
        timeSlotSelect.appendChild(option);
    });

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const selectedSlotIndex = timeSlotSelect.value;
        const selectedSlot = slots[selectedSlotIndex];
        if (selectedSlot.crowded) {
            alert('This time slot is crowded. Please choose another slot.');
        } else {
            alert(`You have booked the ${selectedSlot.time} slot.`);
            localStorage.setItem('bookedSlot', JSON.stringify(selectedSlot));
        }
    });
});
