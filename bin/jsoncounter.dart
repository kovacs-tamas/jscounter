import 'package:args/args.dart';
import 'dart:io';
import 'dart:convert';
import 'dart:async';
import 'package:jsoncounter/jsoncounter.dart' as jsoncounter;

void main(List<String> arguments) {
  final parser = ArgParser();

  parser.addOption(
    'file',
    help: 'The path of the file',
    abbr: 'f',
    defaultsTo: '/Users/tamas/Work/Private/jsoncounter/test/test.json',
  );

  final argResults = parser.parse(arguments);

  File(argResults['file']).readAsString().then((String contents) {
    jsoncounter.parseAndSum(contents);
  }).catchError((e) {
    print(e.toString());
  });
}
