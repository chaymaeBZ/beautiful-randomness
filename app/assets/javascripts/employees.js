# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

var employee = new Vue({
  el: '#employees',
  data: {
    employees: []
  },
  ready: fonction(){
    var that;
    that = this;
    $.ajax({
      url: '/employees.json'
      success: function(res) {
      	that.employees = res;
      }
    });
  }
});

Vue.component('employee-row', {
  template: '#employee-row',
  props: {
    employee: Object;
  }
});
