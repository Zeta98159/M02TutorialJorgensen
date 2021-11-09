<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Net Ninja Pro - the Book</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
  <style>
    section{
      padding: 60px 0;
    }
  </style>
</head>
<body>

  <!-- navbar -->
  <nav class="navbar navbar-expand-md navbar-light"> 
    <div class="container-xxl">
      <a href="#intro" class="navbar-brand">
       <span class="fw-bold text-secondary">
        <i class="bi bi-book-half"></i>
         Net Ninja Pro - the Book
       </span> 
      </a>
      <!--toggle button for mobile nav -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

  <!-- main image & intro text -->
  <section id="intro">
    <div class="container-lg"></div>
      <div class="row justify-content-center align-items-center">
        <div class="col-md-5 text-center text-md-start">
            <h1>
                <div class="display-2">Black Belt</div>
                <div class="display-5 text-muted">Your Coding Skills</div>
            </h1>
            <p class="lead my-4 text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a href="#pricing" class= "btn btn-secondary btn-large">Buy now</a>
        </div>
        <div class ="col-md-5 text-center d-none d-md-block">
        <!-- tooltip -->
        <span class="tt" data-bs-placement="bottom" title="Net Ninja Pro book cover">
           <img class="img-fluid" src="/assets/ebook-cover.png" alt="ebook-cover.png">
        </div>
    </div>
</div>

</section>

  <!-- pricing plans -->
<section id="pricing" class="bg-light mt-5">
    <div class="container-lg">
      <div class="text-center">
        <h2>Pricing Plans</h2>
        <p class="lead text-muted">Choose a pricing plan to suit you.</p>
      </div>
      
      <div class="row my-5 align-items-center justify-content-center g-0">
        <div class="col-8 col-lg-4 col-xl-3">
          <div class="card border-0">
            <div class="card-body text-center py-4">
             <h4 class="card-title">Starter Edition</h4>
             <p class="lead card-subtitle">eBook download only</p>
             <p class="display-5 my-4 text-primary fw-bold">$12.99</p>
             <p class="card-text mx-5 text-muted d-none d-lg-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Mollitia, vitae magni! Repellat commodi a fuga corporis saepe dolorum.</p>
             <a href="" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
            </div>
          </div>
        </div>

        <div class="col-9 col-lg-4">
          <div class="card border-primary border-2">
            <div class="card-header text-center text-primary">Most Popular</div>
            <div class="card-body text-center py-5">
              <h4 class="card-title">Complete Edition</h4>
               <p class="lead card-subtitle">eBook download & all updates</p>
               <p class="display-4 my-4 text-primary fw-bold">$18.99</p>
               <p class="card-text mx-5 text-muted d-none d-lg-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Mollitia, vitae magni! Repellat commodi a fuga corporis saepe dolorum.</p>
                <a href="#" class="btn btn-outline-primary btn-lg mt-3"> Buy Now</a>
          </div>
         </div>
       </div>
      
        <div class="col-8 col-lg-4 col-xl-3">
          <div class="card border-0">
            <div class="card-body text-center py-4">
             <h4 class="card-title">Ultimate Edition</h4>
             <p class="lead card-subtitle">download,updates & extras</p>
             <p class="display-5 my-4 text-primary fw-bold">$24.99</p>
             <p class="card-text mx-5 text-muted d-none d-lg-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Mollitia, vitae magni! Repellat commodi a fuga corporis saepe dolorum</p>
             <a href="" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
            </div>
          </div>
        </div>
    </div>
    </div><!--end container-->
  </section>

  <!-- topics at a glance -->
<section id="topics">
  <div class="container-md">
    <div class="text-center">
      <h2>Inside the Book...</h2>
      <p class="lead text-muted">A quick glance at the topics you'll learn</p>
    </div>

    <div class="row my-5 g-5 justify-content-around align-items-center">
      <div class="col-6 col-lg-4">
        <img src="/assets/kindle.png" class="img-fluid" alt="ebook">
      </div>

      <div class="col-lg-6">
      <!-- accordion -->
      <div class="accordion" id="chapters">
        <div class="accordion-item">
          <h2 class="accordion-header" id="heading-1">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" 
            data-bs-target="#chapter-1" aria-expanded="true" aria-controls="chapter-1">
              Chapter 1 - Your First Web Page
              </button>
          </h2>
          <div id="chapter-1" class="accordion-collapse collapse show" aria-labelledby="heading-1"
           data-bs-parent="#chapters">
            <div class="accordion-body">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Quis assumenda delectus sapiente quidem consequatur odit adipisci necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, 
                animi ipsam nulla sunt alias.</p> 
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit adipisci 
                  necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <h2 class="accordion-header" id="heading-2"> 
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-2" 
        aria-expanded="false" aria-controls="chapter-2">
        Chapter 2 - Mastering CSS</button> 
      </h2>
      <div id="chapter-2" class="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#chapters">
        <div class="accordion-body">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit adipisci necessitatibus nemo 
            aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit 
            adipisci necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading-3">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-3" aria-expanded="false" aria-controls="chapter-1">
          Chapter 3 - The Power of JavaScript
          </button>
      </h2>
      <div id="chapter-3" class="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#chapters">
        <div class="accordion-body">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit adipisci necessitatibus nemo 
            aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit 
            adipisci necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, 
            animi ipsam nulla sunt alias.</p>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading-4"> 
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-4" aria-expanded="false" aria-controls="chapter-4">
          Chapter 4 - Storing Data (Firebase Databases)
          </button>
          </h2>
          <div id="chapter-4" class="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#chapters">
            <div class="accordion-body">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit adipisci 
                necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit adipisci 
               necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
            </div>
          </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading-5">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#chapter-5" aria-expanded="false" aria-controls="chapter-5">
          Chapter 5 - User Authentication
          </button>
      </h2>
      <div id="chapter-5" class="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#chapters">
        <div class="accordion-body">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit adipisci 
            necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p> 
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis assumenda delectus sapiente quidem consequatur odit adipisci 
              necessitatibus nemo aliquid minus modi tempore quibusdam quas vitae, animi ipsam nulla sunt alias.</p>
        </div>
      </div>
    </div>
      </div>
      </div>
    </div>
  </div>
  </div>
</section>

  <!-- reviews list -->
<section id="reviews" class="bg-altlight">
    <div class="container-lg">
      <div class="text-center">
        <h2><i class="bi bi-stars text-altdark"></i>Book Reviews</h2>
        <p class="lead">What my students have said about the book...</p>
        </div> 

        <div class="row justify-content-center my-5">
          <div class="col-lg-8">
            <div class="list-group">
              <div class="list-group-item py-3">
                <div class="pb-2">
                  <i class="bi bi-star-fill text-altdark"></i>
                  <i class="bi bi-star-fill text-altdark"></i>
                  <i class="bi bi-star-fill text-altdark"></i>
                  <i class="bi bi-star-fill text-altdark"></i>
                  <i class="bi bi-star-fill text-altdark"></i>
                </div>
                  <h5 class="mb-1">A must-buy for every aspiring web dev</h5>
                  <p class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, 
                    reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
                    <small>Review by Mario</small>
                </div>
                <div class="list-group-item py-3">
                  <div class="pb-2">
                    <i class="bi bi-star-fill text-altdark"></i>
                    <i class="bi bi-star-fill text-altdark"></i>
                    <i class="bi bi-star-fill text-altdark"></i>
                    <i class="bi bi-star-fill text-altdark"></i>
                    <i class="bi bi-star-fill text-altdark"></i>
              </div>
              <h5 class="mb-1">A must-buy for every aspiring web dev</h5>
                <p class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, 
                  reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
                <small>Review by Mario</small>
            </div>
            <div class="list-group-item py-3">
              <div class="pb-2">
                <i class="bi bi-star-fill text-altdark"></i>
                <i class="bi bi-star-fill text-altdark"></i>
                <i class="bi bi-star-fill text-altdark"></i>
                <i class="bi bi-star-fill text-altdark"></i>
                <i class="bi bi-star-fill text-altdark"></i>
          </div>
          <h5 class="mb-1">A must-buy for every aspiring web dev</h5>
          <p class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, 
            reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
          <small>Review by Mario</small>
        </div>
        <div class="list-group-item py-3">
          <div class="pb-2">
            <i class="bi bi-star-fill text-altdark"></i>
            <i class="bi bi-star-fill text-altdark"></i>
            <i class="bi bi-star-fill text-altdark"></i>
            <i class="bi bi-star-fill text-altdark"></i>
            <i class="bi bi-star-fill text-altdark"></i>
      </div>
      <h5 class="mb-1">A must-buy for every aspiring web dev</h5>
      <p class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, 
        reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
      <small>Review by Mario</small>
    </div>
    <div class="list-group-item py-3">
      <div class="pb-2">
        <i class="bi bi-star-fill text-altdark"></i>
        <i class="bi bi-star-fill text-altdark"></i>
        <i class="bi bi-star-fill text-altdark"></i>
        <i class="bi bi-star-fill text-altdark"></i>
        <i class="bi bi-star-half text-altdark"></i>
      </div>
      <h5 class="mb-1">A must-buy for every aspiring web dev</h5>
      <p class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, 
        reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.</p>
      <small>Review by Mario</small>

    </div>
            </div>
          </div>
        </div>
    </div>
  </section>

  <!-- contact form -->
<section id="contact">
    <div class="container-lg">
      <div class="text-center">
        <h2>Get in Touch</h2>
        <p class="lead">Questions to ask? Fill out the form to contact me directly...</p>
      </div>

      <div class="row justify-content-center my-5">

        <div class="col-lg-6">
        <form>
          <label for="email" class="form-label">Email address:</label>
          <div class="mb-4 input-group">
            <span class="input-group-text"> 
              <i class="bi bi-envelope-fill"></i>
            </span>
            <input type="text" id="email" class="form-control" placeholder="e.g. mario@example.com" />
            <!--tooltip-->
            <span class="input-group-text">
              <span class="tt" data-bs-placement="bottom" title="Enter an email address we can reply to.">
                <i class="bi bi-question-circle text-muted"></i>
              </span>
            </span>
          </div>
          <label for="name" class="form-label">Name:</label>
          <div class="mb-4 input-group">
            <span class="input-group-text">
              <i class="bi bi-person-fill text-secondary"></i>
            </span>
            <input type="text" id="name" class="form-control" placeholder="e.g. Mario" />
            <!--tooltip-->
            <span class="input-group-text">
              <span class="tt" data-bs-placement="bottom" title="Pretty self explanatory really...">
                <i class="bi bi-question-circle text-muted"></i>
              </span>
            </span>
          </div>
          <label for="subject" class="form-label">What is your question about?</label>
          <div class="input-group mb4">
            <span class="input-group-text">
              <i class="bi bi-chat-right-dots-fill"></i>
            </span>
            <select class="form-select" id="subject">
            <option value="pricing" selected>Pricing query</option>
            <option value="content">Content query</option>
            <option value="other">Other query</option>
          </select>
          </div>
          <div class="mb-4 mt-5 form-floating">
            <textarea class="form-control" id="query" style="height: 140px" placeholder="query"></textarea>
            <label for="query">Your query...</label>
          </div>
          <div class="mb-4 text-center">
            <button type="submit" class="btn btn-secondary">Submit</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  </section>

  <!-- get updates / modal trigger -->
  <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebar"
  aria-labelledby="sidebar-label">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="sidebar-label">My Other Books</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In minima ducimus excepturi quasi tempore fugit quis 
      voluptatibus aut error possimus, tenetur natus magni quam voluptatem quae eligendi repudiandae delectus eaque!</p>
  <!--dropdown-->
  <div class="dropdown mt-3">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="book-dropdown" data-bs-toggle="dropdown">
      Choose a book title
      </button>
      <ul class="dropdown-menu" aria-labelledby="book-dropdown">
        <li><a class="dropdown-item" href="#">Become a React Superhero</a></li>
        <li><a class="dropdown-item" href="#">Conquering Vue.js</a></li>
        <li><a class="dropdown-item" href="#">Levelling up Your Next.js</a></li>
        </ul>

  </div>
  </div>
  </div>
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
</body>
</html>