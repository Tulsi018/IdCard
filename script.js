$(document).ready(function () {
    $("#photo").change(function () {
        readURL(this);
    });

   

$("#idCardForm").submit(function (event) {
    event.preventDefault(); // Prevent the form from submitting and page refresh

    const userType = $("#userType").val();
    const name = $("#name").val();
    const id = $("#id").val();
    const department = $("#department").val();

    // Display the generated ID card
    const idCardHTML = `
        <div class="card ${userType}"> <!-- Add student or teacher class based on user type -->
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <img src="${$("#imagePreview").attr("src") || 'default-photo.jpg'}" alt="Photo" class="img-fluid">
                    </div>
                    <div class="col-md-8">
                        <h3 class="card-title">${userType === 'student' ? 'Student ID Card' : 'Teacher ID Card'}</h3>
                        <p class="card-text">Name: ${name}</p>
                        <p class="card-text">ID: ${id}</p>
                        <p class="card-text">Department: ${department}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    $("#idCard").html(idCardHTML).show();
});


    // Initial card generation on page load
    generateIDCard($("#userType").val());
});

function readURL(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            $("#imagePreview").attr("src", e.target.result);
            $("#photoPreview").show();
        };

        reader.readAsDataURL(input.files[0]);
    }
}
