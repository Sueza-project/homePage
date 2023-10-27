<script>
    let todo = "";
    const handleSubmit = () => {
        console.log('Submitting')
    }
    
</script>


<body class="bg-slate-700 ">
    <nav class="p-5 bg-cyan-400 shadow-md:flex  md:items-center md:justify-between ">
        <div class="flex justify-between  items-center ">
            <span class="text-2xl font-[Poppins] cursor-pointer">
                <img class = "h-10 inline" src="https://sueza.eparchemin.com/static/images/favicon.png" alt="logos">
                Sueza
            </span>

            <span class="text-3xl cursor-pointer md:hidden block mx-2 md:hidden ">
                <ion-icon name = "menu" onclick="Memu(this)"></ion-icon>

            </span>
        </div>

        <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-cyan-400 w-full left-0 md:w-auto md:py-0 py-2 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all eas duration-500  "> 
            <!-- absolute modify the dynamic of navbar -->
            <li class = "mx-4 my-6 md:my-0 ">
                <a href="/" class="text-xl hover:text-cyan-500 duration-50">Home</a>
            </li>

            <li class = "mx-4 my-6 md:my-0">
                <a href="/" class="text-xl hover:text-cyan-500 duration-50">About</a>
            </li>

            <li class = "mx-4 my-6 md:my-0">
                <a href="/" class="text-xl hover:text-cyan-500 duration-50">Team</a>
            </li>

            <li class = "mx-4 my-6 md:my-0">
                <a href="/" class="text-xl hover:text-cyan-500 duration-50">Career</a>
            </li>

            <button class="bg-slate-500 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded">
                Get started
            </button>
        </ul>
    </nav>

    

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script>
        function Memu(e){
            let FileList = document.querySelector('ul');
            e.name ==='menu' ? (e.name = "close" FileList.classList.add('opacity-100')) : (e.name="menu", FileList.classList.remove('top-[80px]'),FileList.classList.remove('opacity-100'))   
          }
    </script>

</body>
<!-- 
<form class="my-6" on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-col text-sm mb-2">
    <label class = "font-bold mb-2 text-gray-800 "  for ="todo"> to do</label>
    <input type="text" name="todo" bind:value={todo} placeholder="Watcha gotta do?" class="appearance-none shadow-sm border border-x-gray-200 p-2 
    focus:outline-none focus:border-gray-200 rounded-large"/>
   
        <button type="submit" class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Add</button>
    </div>
</form> -->
