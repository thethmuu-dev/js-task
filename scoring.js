$(document).ready(function(){
  // Make a logic that takes the input value of all subjects and outputs total score and average score.
  function score_indicate(){
    // in the variable "subject_points"
    // Substitute the array of [National language score, English score, Math score, Science score, Social score].
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // in the variable "sum"
    // Add all subjects respectively.
    // Hint! Take out the arrays one by one and add them.
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    // Output the variable "sum" (total points) to "Total points:" (class="sum_indicate").
    $("#sum_indicate").text(sum);
    // In the variable "average"
    // Get the average value and substitute. (Total number of points you want to average (sum) / total number)
    // Hint! Use the length method to find the total number. (length method: method to get the length of the character string, the number of elements in the array, etc.)
  };
  // Get the average score and create logic to rank ("A", "B", "C", "D") from the acquired average score.
  function get_achievement(){
    // In the variable "averageIndicate"
    // Get the average score from class="average_indicate" on HTML and assign it.
    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)
    // If "averageIndicate" is 80 or more, return "A".
    if (averageIndicate >= 80){
      return "A";
      // If "averageIndicate" is 60 or more, return "B".
    } else if (averageIndicate >= 60) {
      return "B";
      // If "averageIndicate" is 40 or more, return "C".
      // Returns "D" if "averageIndicate" is any other score.
    } else {
      return "D";
    }
  };
  // Get the average value and create logic to rank ("A", "B", "C", "D") from the acquired average points.
  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // Substitute the number of the subject entered in the variable "number".
    let number = subject_points.length;
    // Assign "pass" to the variable "judge".
    let judge = "pass";
    // If the score of each entered subject is lower than 60 points, "fail" is reassigned to the variable "judge" and "judge" is returned.
    // Hint! Try searching with "javascript score pass fail logic".
    return pass_or_failure;
  };
  // Create the final judge logic.
  function judgment(){
    //Assign the "return value of get_achievement()" to the variable "achievement".
    let achievement = get_achievement();
    //Substitute the "return value of get_pass_or_failure()" to the variable "pass_or_failure".
    let pass_or_failure = get_pass_or_failure();
    // It is the process that "Your grade is ${achievement} is ${pass_or_failure}" is output when you press the "final judge" (id="alert-indicate) button.
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grade is ${achievement} and ${pass_or_failure}</label>`);
  };
  // This is the process to fire "function score_indicate()" when any of the [national language score, English score, mathematics score, science score, social score] is changed.
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  // It is the process that "get_achievement()" is output when the "rank" (class="evaluation") button is pressed.
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
  // This is the process to output "function et_pass_or_failure()" when the "Judge" (class="btn-judge") button is pressed.
    $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });
  // This is the process where "function judgment()" is output when the "final judge" (class="btn-declaration") button is pressed.
  $('#btn-declaration').click(function() {
  });
});