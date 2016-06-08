using ArchitectNow.ng2.Base.Areas.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ArchitectNow.ng2.Base.Areas.Api.Controllers
{
    public class PeopleController : ApiController
    {

        public List<PersonVM> SearchPeople(string SearchBy = "")
        {
            var _data = new List<PersonVM>()
            {
                new PersonVM() { Id = Guid.NewGuid(), NameFirst="Kevin", NameLast="G" },
                new PersonVM() { Id = Guid.NewGuid(), NameFirst="Chris", NameLast="Y" },
                new PersonVM() { Id = Guid.NewGuid(), NameFirst="Dule", NameLast="D" },
                new PersonVM() { Id = Guid.NewGuid(), NameFirst="Luiz", NameLast="S" },
                new PersonVM() { Id = Guid.NewGuid(), NameFirst="Don", NameLast="J" },
                new PersonVM() { Id = Guid.NewGuid(), NameFirst="George", NameLast="E" }
            };

            if (!string.IsNullOrEmpty(SearchBy))
            {
                SearchBy = SearchBy.Trim().ToUpper();
                return _data.Where(x => x.NameFirst.ToUpper().Contains(SearchBy) || x.NameLast.ToUpper().Contains(SearchBy)).ToList();
            }
            else
            {
                return _data;
            }
        }
    }
}
