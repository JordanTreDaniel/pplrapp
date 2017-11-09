namespace pplrapp.Services {

    export class JobService {
        private JobResource;
        public searchJobs(queryStr) {
            return this.JobResource.query(queryStr).$promise;
        }      
        constructor(
            $resource: ng.resource.IResourceService,
        ) {
            this.JobResource = $resource('/api/jobs/:queryStr');
        }
    }
    export class MovieService {
        private MovieResource;
        public listMovies() {
            return this.MovieResource.query();
        }
        
        constructor(
            $resource: ng.resource.IResourceService,
        ) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('pplrapp').service('movieService', MovieService);
    angular.module('pplrapp').service('jobService', JobService);
    
}
