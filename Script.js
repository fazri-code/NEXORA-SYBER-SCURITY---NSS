const K = "nss_v2_stats";

let stats = JSON.parse(
  localStorage.getItem(K) ||
  '{"discussions":0,"joins":0}'
);

function tampilkan(){
  document.getElementById("discussions").textContent =
    stats.discussions;

  document.getElementById("joins").textContent =
    stats.joins;
}

document.querySelectorAll("[data-join]").forEach(button => {

  button.addEventListener("click", () => {

    stats.joins++;

    localStorage.setItem(
      K,
      JSON.stringify(stats)
    );

    tampilkan();

  });

});

document.getElementById("add").addEventListener("click", () => {

  stats.discussions++;

  localStorage.setItem(
    K,
    JSON.stringify(stats)
  );

  tampilkan();

});

tampilkan();
