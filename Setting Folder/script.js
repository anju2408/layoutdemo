$(document).ready(function() {
    $("#profile-link").addClass("active-li");
    $("#active-manage").addClass("active");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $("#about-link").click(function() {
        clickAbout();
    });
    $("#branding-link").click(function() {
        clickBranding();
    });
    $("#profile-link").click(function() {
        clickPracticeProfile();
    });
    $("#details-link").click(function() {
        clickPracticeDetails();
    });
    $("#practice-staff").click(function() {
        manageStaffTable();
    });
    $("#active-manage").click(function() {
        manageStaffTable();
    });
    $("#active-noti").click(function() {
        staffNotiTable();
    });
    $("#active-doctor").click(function() {
        doctorVisitTable();
    });
    $("#btn-other-staff").click(function() {
        clickOtherStaff();
    });
    $("#btn-doctor").click(function() {
        clickOtherStaff();
    });
    $("#btn-other-staff-2").click(function() {
        clickDoctor();
    });
    $("#btn-other-doctor").click(function() {
        clickDoctor();
    });
    $("#btn-add-doctor").click(function() {
        clickAddDoctor();
    });
    $("#btnTimeEdit").click(function() {
        doctorOfficeAppoin();
    });

    // Doctor's Practice Timings- Office Appointments
    $("#showTable-2").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $(this).parents(".inner_wrap").find("#tableHead").show();
            $(this).parents(".inner_wrap").find("#table-2").show();
            $(".dvtiming").css("height", "830px");
            $(".dvtiming").css("width", "660px");
            $(".inner_wrap ul li").css("background-color", "#ffffff");
        } else {
            $(this).parents(".inner_wrap").find("#tableHead").hide();
            $(this).parents(".inner_wrap").find("#table-2").hide();
            $(".dvtiming").css("height", "435px");
            $(".inner_wrap ul li").css("background-color", "#bfeff5");
        }
    });

    $("#addBreak-1").click(function() {
        $("#trLunch-1").show();
        $("#addBreak-1").hide();
    });
    $("#addBreak-M").click(function() {
        $("#trLunch-M").show();
        $("#addBreak-M").hide();
        $(".dvtiming").css("height", "910px");
    });
    $("#addBreak-Tue").click(function() {
        $("#trLunch-Tue").show();
        $("#addBreak-Tue").hide();
        $(".dvtiming").css("height", "970px");
    });
    $("#addBreak-Wed").click(function() {
        $("#trLunch-Wed").show();
        $("#addBreak-Wed").hide();
        $(".dvtiming").css("height", "1010px");
    });
    $("#addBreak-Thus").click(function() {
        $("#trLunch-Thus").show();
        $("#addBreak-Thus").hide();
        $(".dvtiming").css("height", "1140px");
    });
    $("#addBreak-F").click(function() {
        $("#trLunch-F").show();
        $("#addBreak-F").hide();
        $(".dvtiming").css("height", "1180px");
    });
    $("#addBreak-Sat").click(function() {
        $("#trLunch-Sat").show();
        $("#addBreak-Sat").hide();
        $(".dvtiming").css("height", "1220px");
    });
    $("#addBreak-Sun").click(function() {
        $("#trLunch-Sun").show();
        $("#addBreak-Sun").hide();
        $(".dvtiming").css("height", "1270px");
    });
    $("#check-M").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#monday").css("background-color", "#bfeff5");

        } else {
            $("#monday").css("background-color", "#ffffff");
        }
    });
    $("#check-Tue").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#tuesday").css("background-color", "#bfeff5");

        } else {
            $("#tuesday").css("background-color", "#ffffff");
        }
    });

    $("#check-Wed").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#wednesday").css("background-color", "#bfeff5");

        } else {
            $("#wednesday").css("background-color", "#ffffff");
        }
    });
    $("#check-Thus").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#thuesday").css("background-color", "#bfeff5");

        } else {
            $("#thuesday").css("background-color", "#ffffff");
        }

    });
    $("#check-F").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#friday").css("background-color", "#bfeff5");

        } else {
            $("#friday").css("background-color", "#ffffff");
        }
        $("#friday").css("background-color", "#bfeff5");

    });
    $("#check-Sat").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#saturday").css("background-color", "#bfeff5");

        } else {
            $("#saturday").css("background-color", "#ffffff");
        }

    });
    $("#check-Sun").click(function() {
        const x = $(this).is(":checked");
        if (x == true) {
            $("#sunday").css("background-color", "#bfeff5");

        } else {
            $("#sunday").css("background-color", "#ffffff");
        }

    });

    // Time Difference
    function calculateTime() {
        var valuestart = $("#timeOne").val();
        var valuestartM = $("#timeOne-M").val();
        var valuestartTue = $("#timeOne-Tue").val();
        var valuestartWed = $("#timeOne-Wed").val();
        var valuestartThus = $("#timeOne-Thus").val();
        var valuestartF = $("#timeOne-F").val();
        var valuestartSat = $("#timeOne-Sat").val();
        var valuestartSun = $("#timeOne-Sun").val();

        var valuestop = $("#timeTwo").val();
        var valuestopM = $("#timeTwo-M").val();
        var valuestopTue = $("#timeTwo-Tue").val();
        var valuestopWed = $("#timeTwo-Wed").val();
        var valuestopThus = $("#timeTwo-Thus").val();
        var valuestopF = $("#timeTwo-F").val();
        var valuestopSat = $("#timeTwo-Sat").val();
        var valuestopSun = $("#timeTwo-Sun").val();

        var timeStartH = parseInt(new Date("01/01/2022 " + valuestart).getHours());
        var timeStartMH = parseInt(new Date("01/01/2022 " + valuestartM).getHours());
        var timeStartTueH = parseInt(new Date("01/01/2022 " + valuestartTue).getHours());
        var timeStartWedH = parseInt(new Date("01/01/2022 " + valuestartWed).getHours());
        var timeStartThusH = parseInt(new Date("01/01/2022 " + valuestartThus).getHours());
        var timeStartFH = parseInt(new Date("01/01/2022 " + valuestartF).getHours());
        var timeStartSatH = parseInt(new Date("01/01/2022 " + valuestartSat).getHours());
        var timeStartSunH = parseInt(new Date("01/01/2022 " + valuestartSun).getHours());

        var timeEndH = parseInt(new Date("01/01/2022 " + valuestop).getHours());
        var timeEndMH = parseInt(new Date("01/01/2022 " + valuestopM).getHours());
        var timeEndTueH = parseInt(new Date("01/01/2022 " + valuestopTue).getHours());
        var timeEndWedH = parseInt(new Date("01/01/2022 " + valuestopWed).getHours());
        var timeEndThusH = parseInt(new Date("01/01/2022 " + valuestopThus).getHours());
        var timeEndFH = parseInt(new Date("01/01/2022 " + valuestopF).getHours());
        var timeEndSatH = parseInt(new Date("01/01/2022 " + valuestopSat).getHours());
        var timeEndSunH = parseInt(new Date("01/01/2022 " + valuestopSun).getHours());

        var timeStartM = parseInt(new Date("01/01/2022 " + valuestart).getMinutes());
        var timeStartMM = parseInt(new Date("01/01/2022 " + valuestartM).getMinutes());
        var timeStartTueM = parseInt(new Date("01/01/2022 " + valuestartTue).getMinutes());
        var timeStartWedM = parseInt(new Date("01/01/2022 " + valuestartWed).getMinutes());
        var timeStartThusM = parseInt(new Date("01/01/2022 " + valuestartThus).getMinutes());
        var timeStartFM = parseInt(new Date("01/01/2022 " + valuestartF).getMinutes());
        var timeStartSatM = parseInt(new Date("01/01/2022 " + valuestartSat).getMinutes());
        var timeStartSunM = parseInt(new Date("01/01/2022 " + valuestartSun).getMinutes());

        var timeEndM = parseInt(new Date("01/01/2022 " + valuestop).getMinutes());
        var timeEndMM = parseInt(new Date("01/01/2022 " + valuestopM).getMinutes());
        var timeEndTueM = parseInt(new Date("01/01/2022 " + valuestopTue).getMinutes());
        var timeEndWedM = parseInt(new Date("01/01/2022 " + valuestopWed).getMinutes());
        var timeEndThusM = parseInt(new Date("01/01/2022 " + valuestopThus).getMinutes());
        var timeEndFM = parseInt(new Date("01/01/2022 " + valuestopF).getMinutes());
        var timeEndSatM = parseInt(new Date("01/01/2022 " + valuestopSat).getMinutes());
        var timeEndSunM = parseInt(new Date("01/01/2022 " + valuestopSun).getMinutes());

        var diffH = timeEndH * 60 - timeStartH * 60;
        var diffMH = timeEndMH * 60 - timeStartMH * 60;
        var diffTueH = timeEndTueH * 60 - timeStartTueH * 60;
        var diffWedH = timeEndWedH * 60 - timeStartWedH * 60;
        var diffThusH = timeEndThusH * 60 - timeStartThusH * 60;
        var diffFH = timeEndFH * 60 - timeStartFH * 60;
        var diffSatH = timeEndSatH * 60 - timeStartSatH * 60;
        var diffSunH = timeEndSunH * 60 - timeStartSunH * 60;

        var diffM = timeEndM - timeStartM;
        var diffMM = timeEndMM - timeStartMM;
        var diffTueM = timeEndTueM - timeStartTueM;
        var diffWedM = timeEndWedM - timeStartWedM;
        var diffThusM = timeEndThusM - timeStartThusM;
        var diffFM = timeEndFM - timeStartFM;
        var diffSatM = timeEndSatM - timeStartSatM;
        var diffSunM = timeEndSunM - timeStartSunM;

        $("#time-difference").html((diffH + diffM) + " Minutes");
        $("#time-difference-M").html((diffMH + diffMM) + " Minutes");
        $("#time-difference-Tue").html((diffTueH + diffTueM) + " Minutes");
        $("#time-difference-Wed").html((diffWedH + diffWedM) + " Minutes");
        $("#time-difference-Thus").html((diffThusH + diffThusM) + " Minutes");
        $("#time-difference-F").html((diffFH + diffFM) + " Minutes");
        $("#time-difference-Sat").html((diffSatH + diffSatM) + " Minutes");
        $("#time-difference-Sun").html((diffSunH + diffSunM) + " Minutes");
    };
    $(".show-lunch-time").change(calculateTime);
    calculateTime();
});

function clickAbout() {
    $(".dvAbout").css("display", "block");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");

    $("#about-link").css("color", "#007bff");
    $("#about-link").css("border-bottom", "5px solid #007bff");
    $("#about-link").css("border-radius", "3px");

    $("#branding-link").css("color", "#686868");
    $("#branding-link").css("border-bottom", "none");
    $("#branding-link").css("border-radius", "0px");
}

function clickBranding() {
    $(".dvAbout").css("display", "none");
    $("#container").css("display", "flex");
    $("#form-1").css("display", "block");
    $("#footer").css("display", "block");

    $("#branding-link").css("color", "#007bff");
    $("#branding-link").css("border-bottom", "5px solid #007bff");
    $("#branding-link").css("border-radius", "3px");

    $("#about-link").css("color", "#686868");
    $("#about-link").css("border-bottom", "none");
    $("#about-link").css("border-radius", "0px");
}

function changeFontStyle(e) {
    const text = document.querySelector(".textarea");
    if (e.target.id === "bold") {
        e.target.classList.toggle("active-button");
        text.classList.toggle("bold");
    }
    if (e.target.id === "italic") {
        e.target.classList.toggle("active-button");
        text.classList.toggle("italic");
    }
    if (e.target.id === "underline") {
        e.target.classList.toggle("active-button");
        text.classList.toggle("underline");
    }
}

const btnAction = document.querySelector(".btn-action");
btnAction.addEventListener('click', changeFontStyle);

function clickPracticeProfile() {
    $("#details-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");
    $("#profile-link").addClass("active-li");

    $("#container").css("display", "flex");
    $("#form-1").css("display", "block");
    $("#footer").css("display", "block");
    $(".head-link").css("display", "block");
    $(".dvAbout").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
}

function clickPracticeDetails() {
    $("#details-link").addClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").removeClass("active-li");

    $(".dvAbout").css("display", "none");
    $(".head-link").css("display", "none");
    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".dvPracticeStaff").css("display", "none");
    $(".dvPracticeDetails").css("display", "block");

}

function manageStaffTable() {
    $("#details-link").removeClass("active-li");
    $("#profile-link").removeClass("active-li");
    $("#practice-staff").addClass("active-li");

    $("#active-manage").addClass("active");
    $("#active-noti").removeClass("active");
    $("#active-doctor").removeClass("active");

    $("#container").css("display", "none");
    $("#form-1").css("display", "none");
    $("#footer").css("display", "none");
    $(".head-link").css("display", "none");
    $(".dvAbout").css("display", "none");
    $(".dvPracticeDetails").css("display", "none");
    $(".dvPracticeStaff").css("display", "block");
    $(".table-manage-staff").css("display", "block");
    $(".table-other-staff").css("display", "none");
    $(".dvButttons").css("display", "block");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "none");
}

function staffNotiTable() {
    $("#active-noti").addClass("active");
    $("#active-manage").removeClass("active");
    $("#active-doctor").removeClass("active");

    $(".table-manage-staff").css("display", "none");
    $(".table-doctor-visit").css("display", "none");
    $(".table-other-staff").css("display", "none");
    $(".dvButttons").css("display", "none");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".dvStaffNoti").css("display", "block");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "none");

}

function doctorVisitTable() {
    $("#active-doctor").addClass("active");
    $("#active-manage").removeClass("active");
    $("#active-noti").removeClass("active");

    $(".table-manage-staff").css("display", "none");
    $(".table-manage-noti").css("display", "none");
    $(".table-other-staff").css("display", "none");
    $(".dvButttons").css("display", "none");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "block");
    $(".dvDVT-office-appoin").css("display", "none");

}

function clickOtherStaff() {
    $(".table-other-staff th").css("padding", "1.5rem 2.8rem");
    $(".table-other-staff td").css("padding", "1.5rem 2.8rem");
    $(".table-other-staff td span").css("left", "46px");

    $(".table-manage-staff").css("display", "none");
    $(".table-other-staff").css("display", "block");
    $(".dvButttons").css("display", "none");
    $(".dvOtherStaffButtton").css("display", "block");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "none");
}

function clickDoctor() {
    $(".dvButttons").css("display", "block");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".table-manage-staff").css("display", "block");
    $(".table-other-staff").css("display", "none");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "none");
}

function doctorOfficeAppoin() {
    $(".dvDVT-office-appoin").css("display", "block");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".table-manage-staff").css("display", "none");
    $(".table-other-staff").css("display", "none");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "block");
}

function clickAddDoctor() {
    $(".dvButttons").css("display", "none");
    $(".dvOtherStaffButtton").css("display", "none");
    $(".table-manage-staff").css("display", "none");
    $(".table-other-staff").css("display", "none");
    $(".dvStaffNoti").css("display", "none");
    $(".dvDoctorVisitTiming").css("display", "none");
    $(".dvDVT-office-appoin").css("display", "none");
}