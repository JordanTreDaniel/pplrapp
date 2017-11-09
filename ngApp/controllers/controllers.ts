namespace pplrapp.Controllers {

    export class HomeController {
        public location;
        public keyword;
        public getJobs;
        public jobResults = [];
        public search = function(){
            // if(!this.location || this.location === '' || !this.keyword || this.keyword === '') { return; }
            this.message = '';

            let jobSearchURL = this.keyword + '&l=' + this.location;
            this.jobService.searchJobs({queryStr: jobSearchURL})
                .then((results) => {
                    console.dir(results);
                  this.jobResults = results;
                }).catch((err) => {
                    console.dir(err);
                });
            this.location = '';
            this.keyword = '';
      }
        constructor(
            $http,
            public jobService: pplrapp.Services.JobService
        )
            {
            
    }
}
    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
