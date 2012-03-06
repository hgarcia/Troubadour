-module(troubadour_greeting_controller, [Req]).
-compile(export_all).

hello('GET', []) ->
    {output, "<strong>Troubadour says hello!</strong>"}.
