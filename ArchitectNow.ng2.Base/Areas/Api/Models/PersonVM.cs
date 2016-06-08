using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ArchitectNow.ng2.Base.Areas.Api.Models
{
    public class PersonVM
    {
        public Guid Id { get; set; }
        public string NameFirst { get; set; }
        public string NameLast { get; set; }
    }
}
