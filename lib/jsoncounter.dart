import 'dart:convert';

double getNumericValues(data) {
  double sum = 0;

  if (data is int || data is double) {
    return sum + data;
  } else if (data is Map) {
    data.forEach((_, v) => {sum += getNumericValues(v)});
    return sum;
  } else if (data is List) {
    for (var i = 0; i < data.length; i++) {
      sum += getNumericValues(data[i]);
    }
    return sum;
  } else {
    return 0;
  }
}

double parseAndSum(String data) {
  try {
    var decoded = jsonDecode(data);
    print('The sum of json entries: ${getNumericValues(decoded)}!');
  } catch (exception) {
    print('Invalid json format!');
  }
}
