document.addEventListener("DOMContentLoaded", function () {
    const attendedInput = document.getElementById("attended-lessons");
    const totalInput = document.getElementById("total-lessons");
    const attendancePercentage = document.getElementById(
        "attendance-percentage"
    );
    const newAttendancePercentage = document.getElementById(
        "new-attendance-percentage"
    );
    const desiredAttendanceInput =
        document.getElementById("desired-attendance");
    const requiredDays = document.getElementById("required-days");
    const calendar = document.getElementById("calendar");

    let currentMissedLessons = 0;
    let updatedTotalLessons = parseInt(totalInput.value) || 0;

    // Инициализация календаря Flatpickr
    flatpickr(calendar, {
        mode: "multiple",
        dateFormat: "Y-m-d",
        onChange: function (selectedDates) {
            currentMissedLessons = calculateMissedLessons(selectedDates);
            updatedTotalLessons =
                (parseInt(totalInput.value) || 0) + currentMissedLessons;
            updateAttendance();
        },
    });

    function updateAttendance() {
        const attended = parseInt(attendedInput.value) || 0;
        const total = parseInt(totalInput.value) || 0;
        const percentage = (attended / total) * 100;
        attendancePercentage.textContent = isNaN(percentage)
            ? 0
            : percentage.toFixed(2);

        const newTotal = total + currentMissedLessons;
        const newPercentage = (attended / newTotal) * 100;
        newAttendancePercentage.textContent = isNaN(newPercentage)
            ? 0
            : newPercentage.toFixed(2);
    }

    attendedInput.addEventListener("input", updateAttendance);
    totalInput.addEventListener("input", updateAttendance);

    desiredAttendanceInput.addEventListener("input", function () {
        const desiredPercentage = parseFloat(this.value);
        if (
            isNaN(desiredPercentage) ||
            desiredPercentage <= 0 ||
            desiredPercentage > 100
        ) {
            requiredDays.textContent = "N/A";
            return;
        }

        const currentAttended = parseInt(attendedInput.value) || 0;
        let daysNeeded = 0;
        let newAttended = currentAttended;
        let newTotal = updatedTotalLessons;

        while ((newAttended / newTotal) * 100 < desiredPercentage) {
            daysNeeded++;
            newTotal += averageLessonsPerDay();
            newAttended += averageLessonsPerDay();
        }

        requiredDays.textContent = daysNeeded;
    });

    function averageLessonsPerDay() {
        return (8 * 4 + 9 * 2) / 6; // Среднее количество уроков за рабочую неделю
    }

    function calculateMissedLessons(selectedDates) {
        return selectedDates.reduce((total, date) => {
            const dayOfWeek = date.getDay();
            return (
                total +
                (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 4
                    ? 8
                    : dayOfWeek === 3 || dayOfWeek === 5
                    ? 9
                    : 0)
            );
        }, 0);
    }
});
