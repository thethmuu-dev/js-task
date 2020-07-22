$(document).ready(function () {
  function score_indicate() {
    let subject_points = [
      Number($("#national_language").val()),
      Number($("#english").val()),
      Number($("#mathematics").val()),
      Number($("#science").val()),
      Number($("#society").val()),
    ];

    let sum = subject_points.reduce((a, n) => a + n);

    $("#sum_indicate").text(sum);
    $("#average_indicate").text(sum / subject_points.length);
  }

  function get_achievement() {
    let averageIndicate = $("#average_indicate").text();

    if (averageIndicate >= 80) {
      return "A";
    } else if (averageIndicate >= 60) {
      return "B";
    } else if (averageIndicate >= 40) {
      return "C";
    } else {
      return "D";
    }
  }

  function get_pass_or_failure() {
    let subject_points = [
      Number($("#national_language").val()),
      Number($("#english").val()),
      Number($("#mathematics").val()),
      Number($("#science").val()),
      Number($("#society").val()),
    ];

    let number = subject_points.length;

    let judge = "Pass";

    for (let i = 0; i < number; i++) {
      if (subject_points[i] < 60) {
        judge = "Fail";
      }
    }

    return judge;
  }

  function judgment() {
    let achievement = get_achievement();

    let pass_or_failure = get_pass_or_failure();
    $("#declaration").empty();
    $("#declaration").append(
      `<label id="alert-indicate" class="alert alert-info">Your grade is ${achievement} and ${pass_or_failure}</label>`
    );
  }

  $("#national_language, #english, #mathematics, #science, #society").change(
    function () {
      score_indicate();
    }
  );

  $("#btn-evaluation").click(function () {
    $("#evaluation").text(get_achievement());
  });

  $("#btn-judge").click(function () {
    $("#judge").text(get_pass_or_failure());
  });

  $("#btn-declaration").click(function () {
    $("#judge").text(judgment());
  });
});
