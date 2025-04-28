

function addCourse() {
    const courseList = document.getElementById('courseList');

    const wrapper = document.createElement('div');
    wrapper.className = 'course-item';

    // Course Taking (dropdown)
    const selectLabel = document.createElement('label');
    selectLabel.textContent = "Course Taking:";
    const select = document.createElement('select');
    select.name = 'courseTaking';
    select.innerHTML = `
        <option value="" disabled hidden>Select a course</option>
        <option value="ITIS 3135">ITIS 3135</option>
        <option value="ITCS 3160">ITCS 3160</option>
        <option value="MATH 1241">MATH 1241</option>
        <option value="Other">Other</option>
    `;

    // Course Title
    const titleLabel = document.createElement('label');
    titleLabel.textContent = "Course Title:";
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'courseTitle';
    titleInput.placeholder = 'Enter course title';

    // Course Description
    const descLabel = document.createElement('label');
    descLabel.textContent = "Course Description:";
    const descInput = document.createElement('textarea');
    descInput.name = 'courseDescription';
    descInput.placeholder = 'Enter course description';

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => wrapper.remove();

    // Append everything
    wrapper.appendChild(selectLabel);
    wrapper.appendChild(select);
    wrapper.appendChild(titleLabel);
    wrapper.appendChild(titleInput);
    wrapper.appendChild(descLabel);
    wrapper.appendChild(descInput);
    wrapper.appendChild(deleteBtn);

    wrapper.style.marginBottom = '20px';
    courseList.appendChild(wrapper);
}

document.getElementById('introForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const mascot = document.getElementById('mascot').value;
    const caption = document.getElementById('caption').value;
    const personal = document.getElementById('personalBackground').value;
    const professional = document.getElementById('professionalBackground').value;
    const academic = document.getElementById('academicBackground').value;
    const webdev = document.getElementById('webDevBackground').value;
    const platform = document.getElementById('primaryPlatform').value;
    const funny = document.getElementById('funnyThing').value;
    const extra = document.getElementById('anythingElse').value;

    // Gather courses
    const courseItems = document.querySelectorAll('.course-item');
    let courseListHTML = "";
    courseItems.forEach((item, index) => {
        const selectedEl = item.querySelector('select');
        const titleEl = item.querySelector('input[name="courseTitle"]');
        const descEl = item.querySelector('textarea[name="courseDescription"]');

        const selectedCourse = selectedEl ? selectedEl.value : '';
        const courseTitle = titleEl ? titleEl.value : '';
        const courseDesc = descEl ? descEl.value : '';

        if (selectedCourse || courseTitle || courseDesc) {
            courseListHTML += `
                <li>
                    <strong>${selectedCourse}:</strong> ${courseTitle}<br>
                    <em>${courseDesc}</em>
                </li>
            `;
        }
    });

    const imageInput = document.getElementById('image');
    const imageFile = imageInput.files[0];

    let resultHTML = `
        <h2>${name}'s Introduction</h2>
        <ul>
            <li><strong>Mascot:</strong> ${mascot}</li>
            <li><strong>Personal Background:</strong> ${personal}</li>
            <li><strong>Professional Background:</strong> ${professional}</li>
            <li><strong>Academic Background:</strong> ${academic}</li>
            <li><strong>Web Dev Background:</strong> ${webdev}</li>
            <li><strong>Computer Platform:</strong> ${platform}</li>
            <li><strong>Courses:</strong><ul>${courseListHTML}</ul></li>
            <li><strong>Funny thing:</strong> ${funny}</li>
            <li><strong>Anything else:</strong> ${extra}</li>
        </ul>
    `;

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function (event) {
            resultHTML = `<figure>
                <img src="${event.target.result}" alt="${caption}" style="max-width:300px;">
                <figcaption>${caption}</figcaption>
            </figure>` + resultHTML;

            document.querySelector('main').innerHTML = resultHTML +
                `<button onclick="window.location.reload()">Reset and Start Again</button>`;
        };
        reader.readAsDataURL(imageFile);
    } else {
        document.querySelector('main').innerHTML = resultHTML +
            `<button onclick="window.location.reload()">Reset and Start Again</button>`;
    }
});
