function Log_In()
{
    player1_name=document.getElementById("player1_name_input").innerHTML;
    player2_name=document.getElementById("player2_name_input").innerHTML;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location="game_page.html";
}